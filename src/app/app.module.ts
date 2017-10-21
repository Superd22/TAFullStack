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
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ChatRoomComponent,
    UserListComponent,
    ChatRollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [SendBirdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
