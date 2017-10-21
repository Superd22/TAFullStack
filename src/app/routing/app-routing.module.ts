import { ChatGuard } from './routes/guard/chat-guard.service';
import { environment } from './../../environments/environment';
import { appRoutes } from './routes/_.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: !environment.production
    })
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [ChatGuard]
})
export class AppRoutingModule { }
