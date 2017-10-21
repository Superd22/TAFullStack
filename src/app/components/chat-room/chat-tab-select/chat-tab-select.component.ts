import { FormControl, Validators } from '@angular/forms';
import { ChatRoomService } from './../../../services/chat-room.service';
import { OpenChannel } from './../../../../sendbird.d';
import { SendBirdService } from './../../../services/send-bird.service';
import { Component, OnInit } from '@angular/core';

/**
 * Component handling the currently available chat-rooms, switching from one to the other
 * and creating new ones
 */
@Component({
  selector: 'tafullstack-chat-tab-select',
  templateUrl: './chat-tab-select.component.html',
  styleUrls: ['./chat-tab-select.component.scss']
})
export class ChatTabSelectComponent implements OnInit {

  public channelList: OpenChannel[];
  public createMode = false;
  public channelCreate: FormControl;

  constructor(protected sb: SendBirdService, protected croom: ChatRoomService) { }

  ngOnInit() {
    this.getAccessibleChats();
  }


  /**
   * Fetch a list of all the chats we have access to from the back-end
   */
  private getAccessibleChats() {
    const queryList = this.sb.sb.OpenChannel.createOpenChannelListQuery();

    queryList.next((list, error) => {
      if (error) {
        return;
      }
      this.channelList = list;

      // If we don't have a channel, navigate to the first open one.
      if (!this.croom.currentChannel.getValue()) this.navigateToChannel(this.channelList[0]);
    });
  }

  /**
   * Navigate to the given channel
   * @param channel the channel to navigate to
   */
  public navigateToChannel(channel: OpenChannel) {
    this.croom.setCurrentChatRoom(channel);
  }


  /**
   * Toggles the creation mode on
   */
  public createChannel() {
    this.createMode = true;
    this.channelCreate = new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]);
  }

  /**
   * Cancel the creation of a new channel
   */
  public cancelCreation() {
    this.createMode = false;
  }

  /**
   * Submits a new channel
   */
  public submitNewChannel() {
    if (this.channelCreate.valid)
      this.sb.sb.OpenChannel.createChannel(this.channelCreate.value, null, null, (newChannel) => {
        this.channelList.push(newChannel);
        this.navigateToChannel(newChannel);
        this.cancelCreation();
      });
  }

}
