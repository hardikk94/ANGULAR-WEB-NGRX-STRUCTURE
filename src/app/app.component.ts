import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store'
import { AppState } from './store/states/app.state';
import { LoadingState } from './store/states/loading.state';
import { ToastState } from './store/states/toast.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public toastSubscription: Subscription
  public loadingSubscription: Subscription
  constructor(
    public store: Store<AppState>
  ) {

  }

  public ngOnInit() {
    this.toastSubscription = this.store.select('toastInfo').subscribe((toast: ToastState) => {
      console.log("toast", toast)
    })

    this.loadingSubscription = this.store.select('loadingInfo').subscribe((loading: LoadingState) => {
      console.log("loading", loading)
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
