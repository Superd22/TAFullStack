import { ChatRoomComponent } from './../../components/chat-room/chat-room.component';
import { LandingComponent } from './../../components/landing/landing.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'chat', component: ChatRoomComponent }
]