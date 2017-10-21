import { ChatGuard } from './guard/chat-guard.service';
import { ChatRoomComponent } from './../../components/chat-room/chat-room.component';
import { LandingComponent } from './../../components/landing/landing.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'chat', canActivate: [ChatGuard], component: ChatRoomComponent },
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: '**', redirectTo: '/landing' },
]