import { Injectable } from '@angular/core';
import { RegisterService } from './register.service'
import { Action } from '@ngrx/store';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { RegisterError,RegisterReset,RegisterCompletedAction,RegisterActionTypes } from './register.action';
import { RegisterState } from './register.state';

@Injectable()
export class RegisterEffects {
    constructor(
        public registerService:RegisterService,
        private actions$: Actions) {
    }
    @Effect()
    registerAction$: Observable<any> = this.actions$
        .pipe(
            ofType(RegisterActionTypes.REGISTER_REQUESTED))
        .map(this.toPayload)
        .switchMap(payload => this.registerService.register(payload)
            .mergeMap((res) => {
                let response: RegisterState = {                                    
                    status: "success",
                    data:{}
                }
                return Observable.from([
                    (new RegisterCompletedAction(response))
                ])
            }))
        .catch(this.handleError)


    private handleError(error) {
        return Observable.of(new RegisterError({ error: error }));
    }


    public toPayload(action) {
        return action.payload
    }
}
