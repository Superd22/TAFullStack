import { OpenChannel, User } from './../../sendbird.d';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SendBirdService } from './send-bird.service';
import { BaseChannel } from '../../sendbird.d';
import { Injectable } from '@angular/core';


@Injectable()
export class ChatRoomService {

  private _currentChannel: BehaviorSubject<BaseChannel> = new BehaviorSubject(null);
  public get currentChannel() { return this._currentChannel; }

  constructor(protected sb: SendBirdService) { }

  /**
   * Sets the current channel for the user
   * @param channelUrl the url of the channel
   * @param channel the channel object
   * @param open if this is the url for an open or group channel
   */
  public setCurrentChatRoom(channelUrl: string, open: boolean)
  public setCurrentChatRoom(channel: BaseChannel)
  public setCurrentChatRoom(channel: any) {
    // We were given a channel url
    if (typeof channel === typeof "abc") {
      // fetch our open channel or our group channel
      open ? this.sb.sb.OpenChannel.getChannel(channel, (fetchedChannel) => channel = fetchedChannel) :
        this.sb.sb.GroupChannel.getChannel(channel, (fetchedChannel) => channel = fetchedChannel);
    }
    const newChannel = <BaseChannel>channel;
    if (newChannel) {
      const oldChan = this.currentChannel.getValue();

      // We're trying to re-enter the same thing, no need.
      if (oldChan && oldChan.url === newChannel.url) return;

      // If we were in an open channel before, stop listening to it now.
      if (oldChan && oldChan.isOpenChannel()) (<OpenChannel>oldChan).exit((channel, error) => { });

      // If we're setting an open channel as the current, we want to enter it (subscribe to events in it)
      if (newChannel.isOpenChannel()) (<OpenChannel>newChannel).enter((openChannel, error) => { });

      // Finally we can tell the app this is now the new main channel
      this._currentChannel.next(newChannel);
    }
  }

  /**
   * Creates a private 1 on 1 with the supplied user
   * @param user 
   */
  public createDmWith(user: User);
  public createDmWith(user: { userId: any });
  public createDmWith(userId: string);
  public createDmWith(u: any) {
    if (typeof u === typeof {}) u = u.userId;

    if (this.sb.isCurrentUser(u)) throw "trying to create a convo with oneself. -that's deep-";

    this.sb.sb.GroupChannel.createChannelWithUserIds([u], true, (groupChannel, error) => {
      if (error) {
        return;
      }

      this.setCurrentChatRoom(groupChannel);
    });
  }
}
