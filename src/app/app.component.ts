import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store'
import { AppState } from './store/states/app.state';
import { LoadingState } from './store/states/loading.state';
import { ToastState } from './store/states/toast.state';
import { LoaderService } from './core/providers/loader.service';
import { ToastService } from './core/providers/toast.service';
import { ToastHideRequested } from './store/actions/toast.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public toastSubscription: Subscription
  public loadingSubscription: Subscription
  public loadingText = "Loading..."
  constructor(
    private store: Store<AppState>,
    public loadingService: LoaderService,
    public toastService: ToastService
  ) {

  }

  public ngOnInit() {
    // toast show and clear state
    this.toastSubscription = this.store.select('toastInfo').subscribe((toast: ToastState) => {      
      if (toast.isToast) {
        this.toastService.showToastMessage(toast.type, toast.title, toast.message)
      }
      else {
        this.store.dispatch(new ToastHideRequested())
      }
    })

    // loading show and hide with clear state
    this.loadingSubscription = this.store.select('loadingInfo').subscribe((loading: LoadingState) => {
      if (loading.isLoading) {
        this.loadingText = loading.message
        this.loadingService.loadingShow()
      }
      else {
        this.loadingService.loadingHide()
      }
    })
  }


  public ngOnDestroy() {
    if (this.toastSubscription) {
      this.toastSubscription.unsubscribe()
    }
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe()
    }
  }
}
