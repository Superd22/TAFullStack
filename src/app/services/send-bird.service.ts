import { SendBirdInstance, User } from '../../sendbird.d';
import { ReplaySubject } from 'rxjs/ReplaySubject';
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

  private _currentSbUser: ReplaySubject<User> = new ReplaySubject(1);
  public get currentSbUser() { return this._currentSbUser; }

  constructor() {

  }

  /**
   * Registers as a given user to sendbird
   * @param userName unique name to chose
   */
  public async registerUser(userName: string) {
    this._sb.connect(userName, (user, error) => {
      if (!error) {
        this._currentSbUser.next(user);
        console.log(user);
      }
    });
  }
}
