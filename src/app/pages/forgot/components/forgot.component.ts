import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgotStoreService } from './../store/forgot.store';
import { Subscription } from 'rxjs/Subscription'
import { ForgotState } from '../store/forgot.state';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit, OnDestroy {
  public forgotForm: FormGroup
  public forgotSubscription: Subscription
  constructor(
    public formBuilder: FormBuilder,
    public forgotStoreService: ForgotStoreService
  ) {
  }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })

    this.forgotSubscription = this.forgotStoreService.storeSelect().subscribe((response: ForgotState) => {
      console.log("forgotInfo", response)
    })
  }

  public forgotEmail() {
    this.forgotStoreService.dispatchForgotAction(this.forgotForm.value)
  }

  public ngOnDestroy() {
    if (this.forgotSubscription) {
      this.forgotSubscription.unsubscribe()
      this.forgotStoreService.dispatchResetForgot()
    }
  }
}
