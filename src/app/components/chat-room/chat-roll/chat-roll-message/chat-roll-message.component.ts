import { ChatRoomService } from './../../../../services/chat-room.service';
import { SendBirdService } from './../../../../services/send-bird.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tafullstack-chat-roll-message',
  templateUrl: './chat-roll-message.component.html',
  styleUrls: ['./chat-roll-message.component.scss']
})
export class ChatRollMessageComponent implements OnInit {

  /** the message object of this component */
  @Input()
  public message;
  /** if this message was sent by ourself */
  public get isOwnMessage() { return this.sb.isCurrentUser(this.message._sender.userId); }

  constructor(protected sb: SendBirdService, protected croom: ChatRoomService) { }

  ngOnInit() {
  }

  public createDM() {
    if (!this.isOwnMessage)
      this.croom.createDmWith(this.message._sender);
  }
}
