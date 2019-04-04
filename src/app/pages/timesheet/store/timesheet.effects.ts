import { Injectable } from '@angular/core';
import { TimesheetService } from './timesheet.service'
import { Action } from '@ngrx/store';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { TimesheetError, TimesheetReset, TimesheetCompletedAction, TimesheetActionTypes } from './timesheet.action';
import { TimesheetState } from './timesheet.state';
import { LoadingState } from '../../../store/states/loading.state'
import { ToastState } from 'src/app/store/states/toast.state';
import { ToastShowRequested } from 'src/app/store/actions/toast.action';
import { LoadingHideRequested } from 'src/app/store/actions/loading.action';

@Injectable()
export class TimesheetEffects {
    constructor(
        public timesheetService: TimesheetService,
        private actions$: Actions) {
    }
    @Effect()
    timesheetAction$: Observable<any> = this.actions$
        .pipe(
            ofType(TimesheetActionTypes.TIMESHEET_REQUESTED))
        .map(this.toPayload)
        .switchMap(payload => this.timesheetService.saveTimesheet(payload)
            .mergeMap((res: any) => {
                let loading: LoadingState = { isLoading: false, message: null }
                let toast: ToastState;
                let response: TimesheetState;
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
                    (new TimesheetCompletedAction(response)),
                ])
            }))
        .catch(this.handleError)


    private handleError(error) {
        let loading: LoadingState = { isLoading: false, message: null }
        let toast: ToastState = { type: 'error', message: error, title: 'ERROR', isToast: true }
        let timesheetError: TimesheetState = {
            success: 0,
            data: {},
            error: error
        }
        return Observable.from([
            (new ToastShowRequested(toast)),
            (new LoadingHideRequested(loading)),
            (new TimesheetError(timesheetError))
        ])
    }


    public toPayload(action) {
        return action.payload
    }
}
