import { Injectable } from '@angular/core';
import { AuthService } from './../providers/auth.service'
import { Action } from '@ngrx/store';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { authActionTypes, AuthErrorAction, LoginCompletedAction } from './../actions/auth.action';

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
                return Observable.from([
                    (new LoginCompletedAction({ user: res }))
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
