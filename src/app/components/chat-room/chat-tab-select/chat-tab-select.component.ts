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
      console.log(list);
      this.channelList = list;
    });
  }

  /**
   * Navigate to the given channel
   * @param channel the channel to navigate to
   */
  public navigateToChannel(channel: OpenChannel) {
    this.croom.setCurrentChatRoom(channel);
  }

  
}
