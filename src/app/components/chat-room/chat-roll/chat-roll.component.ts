import { BaseChannel, PreviousMessageListQuery, UserMessage, FileMessage, AdminMessage } from './../../../../sendbird.d';
import { ChatRoomService } from './../../../services/chat-room.service';
import { SendBirdService } from './../../../services/send-bird.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ScrollableDirective } from '../../../directives/scrollable.directive';

@Component({
  selector: 'tafullstack-chat-roll',
  templateUrl: './chat-roll.component.html',
  styleUrls: ['./chat-roll.component.scss']
})
export class ChatRollComponent implements OnInit {

  /** channel currently being displayed */
  public currentChannel: BaseChannel = null;
  /** querylist for our messages in this channel */
  private _messageListQuery: PreviousMessageListQuery;
  private _channelHandler = new this.sb.sb.ChannelHandler();
  /** if we're currently querying for more messages  */
  public _queryingMessageList: boolean = false;
  /** display messages */
  public messages: (UserMessage | FileMessage | AdminMessage)[] = [];

  /** message currently being typed */
  public newMsgText: string = "";

  @ViewChild(ScrollableDirective)
  private _scrollable: ScrollableDirective;

  constructor(protected sb: SendBirdService, protected croom: ChatRoomService) {
    this._channelHandler.onMessageReceived = this.onMessageReceived;
  }

  ngAfterViewInit() {
    this._scrollable.onTop.subscribe((event) => {
      this.fetchMessagesOfChannel();
    });
  }

  ngOnInit() {
    this.sb.sb.addChannelHandler("chat-roll-handler", this._channelHandler);

    this.croom.currentChannel.subscribe((currentChannel) => {
      if (currentChannel) {
        this.resetToChannel(currentChannel);
        this.fetchMessagesOfChannel();
      }
    });
  }

  ngOnDestroy() {
    this.sb.sb.removeChannelHandler("chat-roll-handler");
  }

  /**
   * Check if the given channel is the one currently being displayed
   * @param channel 
   */
  public isCurrentChannel(channel: BaseChannel) {
    return channel.url === this.currentChannel.url;
  }

  /**
   * Callback on new message
   * @param channel 
   * @param message 
   */
  public onMessageReceived = (channel: BaseChannel, message: UserMessage) => {
    console.log("RECEIVED MESSAGES", channel, message);
    if (this.isCurrentChannel(channel)) {
      this.messages.push(message);
      this._scrollable.scrollToBottomIfNotUp();
    }
  }

  /**
   * Resets the state for this channel
   * @param channel the channel to reset everything for
   */
  private resetToChannel(channel: BaseChannel) {
    this.currentChannel = channel;
    this._messageListQuery = channel.createPreviousMessageListQuery();
    this.messages = [];
  }

  /**
   * Fetch 25 more messages in this channel with each call
   */
  private fetchMessagesOfChannel() {
    // Ensure we're not already querying 
    if (!this._queryingMessageList && this._messageListQuery.hasMore) {
      // We're now querying
      this._queryingMessageList = true;
      // Get 25 latest message we don't already have
      this._messageListQuery.load(25, false, (messages, error) => {
        this._queryingMessageList = false;
        if (error) return;

        // Push them into the display array
        this.messages = messages.concat(this.messages);
        this._scrollable.scrollToBottomIfNotUp();
      });
    }
  }

  /**
   * Sends the current typing message to the current channel
   */
  public sendMessage() {
    if (this.newMsgText)
      this.currentChannel.sendUserMessage(this.newMsgText, (message, error) => {
        this.newMsgText = "";
        this.messages.push(message);
        this._scrollable.scrollToBottomIfNotUp();
      });
  }


}
