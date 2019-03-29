import { Injectable } from '@angular/core';
import { RegisterService } from './register.service'
import { Action } from '@ngrx/store';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { RegisterError, RegisterReset, RegisterCompletedAction, RegisterActionTypes } from './register.action';
import { RegisterState } from './register.state';
import { LoadingState } from './../../../store/states/loading.state'
import { ToastState } from 'src/app/store/states/toast.state';
import { ToastShowRequested } from 'src/app/store/actions/toast.action';
import { LoadingHideRequested } from 'src/app/store/actions/loading.action';

@Injectable()
export class RegisterEffects {
    constructor(
        public registerService: RegisterService,
        private actions$: Actions) {
    }
    @Effect()
    registerAction$: Observable<any> = this.actions$
        .pipe(
            ofType(RegisterActionTypes.REGISTER_REQUESTED))
        .map(this.toPayload)
        .switchMap(payload => this.registerService.register(payload)
            .mergeMap((res: any) => {
                let loading: LoadingState = { isLoading: false, message: null }
                let toast: ToastState;
                let response: RegisterState;
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
                    (new RegisterCompletedAction(response)),
                ])
            }))
        .catch(this.handleError)


    private handleError(error) {
        let loading: LoadingState = { isLoading: false, message: null }
        let toast: ToastState = { type: 'error', message: error, title: 'ERROR', isToast: true }
        let registerError: RegisterState = {
            success: 0,
            data: {},
            error: error
        }
        return Observable.from([
            (new ToastShowRequested(toast)),
            (new LoadingHideRequested(loading)),
            (new RegisterError(registerError))
        ])
    }


    public toPayload(action) {
        return action.payload
    }
}
