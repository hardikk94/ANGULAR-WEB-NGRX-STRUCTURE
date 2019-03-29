import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgotStoreService } from './../store/forgot.store';
import { Subscription } from 'rxjs/Subscription'
import { ForgotState } from '../store/forgot.state';
import { Router } from '@angular/router'
import { LoadingShowRequested } from './../../../store/actions/loading.action'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/states/app.state';
import { LoadingState } from 'src/app/store/states/loading.state';
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
    public forgotStoreService: ForgotStoreService,
    public router: Router,
    public store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })

    this.forgotSubscription = this.forgotStoreService.storeSelect().subscribe((response: ForgotState) => {      
      if (response.success) {
        this.router.navigate(['auth'])
      }
    })
  }

  public forgotEmail() {
    let loadingdata: LoadingState = {
      isLoading: true,
      message: "Please Wait, Sending mail..."
    }
    this.store.dispatch(new LoadingShowRequested(loadingdata))
    this.forgotStoreService.dispatchForgotAction(this.forgotForm.value)
  }

  public ngOnDestroy() {
    if (this.forgotSubscription) {
      this.forgotSubscription.unsubscribe()
      this.forgotStoreService.dispatchResetForgot()
    }
  }
}
