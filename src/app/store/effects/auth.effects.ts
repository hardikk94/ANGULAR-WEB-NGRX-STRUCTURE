import { Injectable } from '@angular/core';
import { AuthService } from './../providers/auth.service'
import { Action } from '@ngrx/store';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { authActionTypes, AuthErrorAction, LoginCompletedAction } from './../actions/auth.action';
import { LoadingHideRequested } from './../actions/loading.action'
import { ToastShowRequested } from './../actions/toast.action'
import { AuthState } from '../states/auth.state';
import { LoadingState } from '../states/loading.state';
import { ToastState } from '../states/toast.state';

@Injectable()
export class AuthEffects {
    constructor(
        public authService: AuthService,
        private actions$: Actions) {
    }
    @Effect()
    loginAction$: Observable<any> = this.actions$
        .pipe(
            ofType(authActionTypes.LOGIN_REQUESTED))
        .map(this.toPayload)
        .switchMap(payload => this.authService.signIn(payload)
            .mergeMap((res) => {
                let response: AuthState = {
                    userData: {},
                    isLoggedIn: true,
                    status: "success",
                }
                let loading: LoadingState = {
                    isLoading: false
                }

                let toast: ToastState = {
                    type: 'success',
                    message: res.message,
                    title: 'success'
                }
                return Observable.from([
                    (new LoadingHideRequested(loading)),
                    (new ToastShowRequested(toast)),
                    (new LoginCompletedAction(response))
                ])
            }))
        .catch(this.handleError)


    private handleError(error) {
        return Observable.of(new AuthErrorAction({ error: error }));
    }


    public toPayload(action) {
        return action.payload
    }
}
