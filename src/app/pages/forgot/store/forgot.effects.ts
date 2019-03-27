import { Injectable } from '@angular/core';
import { ForgotService } from './forgot.service'
import { Action } from '@ngrx/store';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ForgotActionTypes, ForgotCompletedAction, ForgotError } from './forgot.action';
import { ForgotState } from './forgot.state';
import { LoadingState } from './../../../store/states/loading.state';
import { ToastState } from './../../../store/states/toast.state';
import { LoadingHideRequested } from './../../../store/actions/loading.action'
import { ToastShowRequested } from './../../../store/actions/toast.action'

@Injectable()
export class ForgotEffects {
    constructor(
        public forgotService: ForgotService,
        private actions$: Actions) {
    }
    @Effect()
    forgotAction$: Observable<any> = this.actions$
        .pipe(
            ofType(ForgotActionTypes.FORGOT_REQUESTED))
        .map(this.toPayload)
        .switchMap(payload => this.forgotService.forgotEmail(payload)
            .mergeMap((res: any) => {
                let forgotresponse: ForgotState;
                let loading: LoadingState = { isLoading: false, message: null }
                let toast: ToastState;
                if (res.success) {
                    toast = { type: 'success', message: res.message, title: 'success', isToast: true }
                    forgotresponse = {
                        success: 1,
                        data: res.data,
                    }
                }
                else {
                    toast = { type: 'error', message: res.error, title: 'error', isToast: true }
                    forgotresponse = {
                        success: 0,
                        data: {},
                        error: res.error
                    }
                }
                return Observable.from([
                    (new ToastShowRequested(toast)),
                    (new LoadingHideRequested(loading)),
                    (new ForgotCompletedAction(forgotresponse))
                ])
            }))
        .catch(this.handleError)


    private handleError(error) {
        let forgotError: ForgotState = {
            success: 0,
            data: {},
            error: error
        }
        return Observable.of(new ForgotError(forgotError));
    }


    public toPayload(action) {
        return action.payload
    }
}
