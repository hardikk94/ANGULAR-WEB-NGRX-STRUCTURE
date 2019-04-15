import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { Observable, from } from 'rxjs';
import { LoadingState } from '../../../store/states/loading.state'
import { ToastState } from 'src/app/store/states/toast.state';
import { ToastShowRequested } from 'src/app/store/actions/toast.action';
import { LoadingHideRequested } from 'src/app/store/actions/loading.action';
import { CalendarActionTypes, CalendarCompletedAction, CalendarError } from './calendar.action';
import { CalendarService } from './calendar.service';
import { CalendarState } from './calendar.state';

@Injectable()
export class CalendarEffects {
    constructor(
        public calendarService: CalendarService,
        private actions$: Actions) {
    }
    /**
     * save calendar
     */
    @Effect()
    saveCalendarAction$: Observable<any> = this.actions$
        .pipe(
            ofType(CalendarActionTypes.CALENDAR_REQUESTED))
        .map(this.toPayload)
        .switchMap(payload => this.calendarService.save(payload)
            .mergeMap((res: any) => {
                let loading: LoadingState = { isLoading: false, message: null }
                let toast: ToastState;
                let response: CalendarState;
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
                    (new CalendarCompletedAction(response)),
                ])
            }))
        .catch(this.handleError)

    private handleError(error) {
        let loading: LoadingState = { isLoading: false, message: null }
        let toast: ToastState = { type: 'error', message: error, title: 'ERROR', isToast: true }
        let calendarError: CalendarState = {
            success: 0,
            data: {},
            error: error
        }
        return Observable.from([
            (new ToastShowRequested(toast)),
            (new LoadingHideRequested(loading)),
            (new CalendarError(calendarError))
        ])
    }


    public toPayload(action) {
        return action.payload
    }
}
