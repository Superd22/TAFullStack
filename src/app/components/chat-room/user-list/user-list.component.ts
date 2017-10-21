import { BaseChannel, OpenChannel, User, GroupChannel } from './../../../../sendbird.d';
import { ChatRoomService } from './../../../services/chat-room.service';
import { SendBirdService } from './../../../services/send-bird.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tafullstack-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  /** current channel */
  private _currentChannel: BaseChannel;
  /** list of user being displayed */
  public displayUsers: User[] = [];
  /** event handler */
  private _channelHandler = new this.sb.sb.ChannelHandler();

  constructor(protected sb: SendBirdService, protected croom: ChatRoomService) {
    // Declare our open channel callbacks
    // Note that we don't need group channel callbacks since they're handled by the api
    this._channelHandler.onUserExited = this.onUserExited;
    this._channelHandler.onUserEntered = this.onUserEntered;

    // Check for channel change
    this.croom.currentChannel.subscribe((channel) => {
      if (!channel) return;

      this._currentChannel = channel;
      if (this._currentChannel.isOpenChannel()) this.hydrateOpenChannel();
      else this.hydratePrivateChannel();
    });
  }

  ngOnInit() {
    this.sb.sb.addChannelHandler("user-list-handler", this._channelHandler);
  }

  ngOnDestroy() {
    this.sb.sb.removeChannelHandler("user-list-handler");
  }

  /**
   * Create a private convo with the supplied user
   * @param user 
   */
  public createDMWith(user: User) {
    if (this.isCurrentUser(user)) throw "trying to create a convo with oneself. -that's deep-";

    this.sb.sb.GroupChannel.createChannelWithUserIds([user.userId], true, (groupChannel, error) => {
      if (error) {
        return;
      }

      this.croom.setCurrentChatRoom(groupChannel);
    });
  }

  /**
   * Check if the supplied user is the current one
   * @param user 
   */
  public isCurrentUser(user: User): boolean {
    return user.userId === this.sb.currentSbUser.getValue().userId;
  }

  /**
   * Gets all the participant in this open channel
   */
  private hydrateOpenChannel() {
    const participantListQuery = (<OpenChannel>this._currentChannel).createParticipantListQuery();

    participantListQuery.next((users, error) => {
      if (error) return;

      this.displayUsers = users;
    });
  }

  /**
   * Gets all the participants in this private channel
   */
  private hydratePrivateChannel() {
    this.displayUsers = (<GroupChannel>this._currentChannel).members;
  }

  /**
   * When an user joins an open channel
   * @param channel 
   * @param user 
   */
  public onUserEntered = (channel: OpenChannel, user: User) => {
    if (channel.url === this._currentChannel.url) {
      // Don't double push
      const id = this.displayUsers.findIndex((checkUser) => checkUser.userId === user.userId);
      if (id < 0)
        this.displayUsers.push(user);
    }
  }

  /**
   * When an user leaves an open channel
   * @param channel 
   * @param user 
   */
  public onUserExited = (channel: OpenChannel, user: User) => {
    // If we're in the right channel
    if (channel.url === this._currentChannel.url) {
      if (this.displayUsers) {
        // Find the guy who left
        const id = this.displayUsers.findIndex((checkUser) => checkUser.userId === user.userId);
        // ... And kill him.
        if (id) this.displayUsers.splice(id, 1);
      }
    }
  }

}
