import { ChatRoomService } from './services/chat-room.service';
import { SendBirdService } from './services/send-bird.service';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { UserListComponent } from './components/chat-room/user-list/user-list.component';
import { ChatRollComponent } from './components/chat-room/chat-roll/chat-roll.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChatTabSelectComponent } from './components/chat-room/chat-tab-select/chat-tab-select.component';
import { ScrollableDirective } from './directives/scrollable.directive';
import { ChatRollMessageComponent } from './components/chat-room/chat-roll/chat-roll-message/chat-roll-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ChatRoomComponent,
    UserListComponent,
    ChatRollComponent,
    ChatTabSelectComponent,
    ScrollableDirective,
    ChatRollMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [SendBirdService, ChatRoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
