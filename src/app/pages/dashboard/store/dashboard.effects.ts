import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { Observable, from } from 'rxjs';
import { LoadingState } from '../../../store/states/loading.state'
import { ToastState } from 'src/app/store/states/toast.state';
import { ToastShowRequested } from 'src/app/store/actions/toast.action';
import { LoadingHideRequested } from 'src/app/store/actions/loading.action';
import { DashboardActionTypes, DashboardCompletedAction, DashboardError } from './dashboard.action';
import { DashboardState } from './dashboard.state';
import { DashboardService } from './dashboard.service';

@Injectable()
export class DashboardEffects {
    constructor(
        public dashboardService: DashboardService,
        private actions$: Actions) {
    }
    @Effect()
    DashboardAction$: Observable<any> = this.actions$
        .pipe(
            ofType(DashboardActionTypes.DASHBOARD_REQUESTED))
        .map(this.toPayload)
        .switchMap(payload => this.dashboardService.save(payload)
            .mergeMap((res: any) => {
                let loading: LoadingState = { isLoading: false, message: null }
                let toast: ToastState;
                let response: DashboardState;
                if (res.success) {
                    toast = { type: 'success', message: res.message, title: 'SUCCESS', isToast: true }
                    response = { success: 1, data: res.data }
                }
                else {
                    response = { success: 0, data:{}, error: res.error }
                    toast = { type: 'error', message: res.error, title: 'ERROR', isToast: true }
                }
                return Observable.from([
                    (new ToastShowRequested(toast)),
                    (new LoadingHideRequested(loading)),
                    (new DashboardCompletedAction(response)),
                ])
            }))
        .catch(this.handleError)


    private handleError(error) {
        let loading: LoadingState = { isLoading: false, message: null }
        let toast: ToastState = { type: 'error', message: error, title: 'ERROR', isToast: true }
        let dashboardError: DashboardState = {
            success: 0,
            data: {},
            error: error
        }
        return Observable.from([
            (new ToastShowRequested(toast)),
            (new LoadingHideRequested(loading)),
            (new DashboardError(dashboardError))
        ])
    }


    public toPayload(action) {
        return action.payload
    }
}
