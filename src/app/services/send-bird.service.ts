import { SendBirdInstance, User } from '../../sendbird.d';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/** @see sendbird.d.ts */
declare var SendBird;


/**
* Main helper service for SendBird
*/
@Injectable()
export class SendBirdService {

  /** main sendbird instance */
  private _sb: SendBirdInstance = new SendBird({ appId: "C7B940CE-B68D-4979-9E95-7C2CD94DE2F3" });
  /** app-wide sendbird instance */
  public get sb() { return this._sb }

  private _currentSbUser: BehaviorSubject<User> = new BehaviorSubject(null);
  public get currentSbUser() { return this._currentSbUser; }

  constructor() {
    //this.registerUser(String(Math.floor(Math.random() * 9e15)));
  }

  /**
   * Registers as a given user to sendbird
   * @param userName unique name to chose
   */
  public async registerUser(userName: string) {
    return new Promise((resolve, reject) => this._sb.connect(userName, (user, error) => {
      if (!error) {
        this._currentSbUser.next(user);
        resolve(user);
      }
      else reject(error);
    }));
  }


  /**
   * Check if the supplied user is the current one
   * @param user 
   * @param userId the id of the user to check against
   */
  public isCurrentUser(user: User): boolean;
  public isCurrentUser(userId: any): boolean;
  public isCurrentUser(u): boolean {
    const uid = typeof u === typeof {} ? u.userId : u;
    return uid === this.currentSbUser.getValue().userId;
  }

}
