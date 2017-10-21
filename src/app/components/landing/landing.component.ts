import { SendBirdService } from './../../services/send-bird.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'tafullstack-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public busy: boolean = false;

  /** form control for the nickname the user is inputing */
  public nickNameFormControl = new FormControl('', [
    Validators.minLength(3),
    Validators.required
  ]);

  constructor(protected sb: SendBirdService, protected router: Router) {
    this.subscribeUserChange();
  }

  ngOnInit() {
  }


  /**
   * Submits a new nickname to the back end if our form is valid.
   */
  public async submitNewNickName() {
    if (this.nickNameFormControl.valid) {
      this.busy = true;
      await this.sb.registerUser(this.nickNameFormControl.value);
      this.busy = false;
    }
    else { }
  }

  /**
   * Subscribe to internal user change
   */
  private subscribeUserChange() {
    this.sb.currentSbUser.subscribe((user) => {
      if (user) {
        // We have an user, we no longer need to be on the landing page
        this.router.navigate(['/chat']);
      }
    });
  }

  public

}
