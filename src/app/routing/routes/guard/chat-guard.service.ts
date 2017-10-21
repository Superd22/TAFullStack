import { SendBirdService } from './../../../services/send-bird.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";


/**
 * Guard against access to the chat as a non authed user.
 */
@Injectable()
export class ChatGuard implements CanActivate {

    constructor(protected sb: SendBirdService) { }

    canActivate() {
        // Simply ensure we have an sb user
        return Boolean(this.sb.currentSbUser.getValue());
    }

}