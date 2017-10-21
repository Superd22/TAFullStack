import { ChatRoomService } from './../../../../services/chat-room.service';
import { SendBirdService } from './../../../../services/send-bird.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

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

  public ytEmbed: IYoutubeEmbed = null;

  constructor(protected sb: SendBirdService, protected croom: ChatRoomService,
    protected http: HttpClient, protected sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.checkForYoutube()
  }

  public createDM() {
    if (!this.isOwnMessage)
      this.croom.createDmWith(this.message._sender);
  }


  public checkForYoutube() {
    const regex = new RegExp(/youtube\.com\/watch.*v=([^&/ ]*)|youtu.be\/([^&/ ]*)/);

    let match = regex.exec(this.message.message);
    if (match) {

      this.http.get<IYoutubeEmbed>("https://www.youtube.com/oembed?url=" + match[0] + "&format=json").subscribe((data) => {
        if (data) {
          this.ytEmbed = data;
          this.ytEmbed.html = this.sanitizer.bypassSecurityTrustHtml(data.html);
        }
      });

    }
  }
}


export interface IYoutubeEmbed {
  author_name: string;
  author_url: string;
  height: number;
  html;
  provider_name: "YouTube"
  provider_url: "https://www.youtube.com/"
  thumbnail_height: number;
  thumbnail_url: string;
  thumbnail_width: number;
  title: string;
  type: "video"
  version: string;
  width: number;
}