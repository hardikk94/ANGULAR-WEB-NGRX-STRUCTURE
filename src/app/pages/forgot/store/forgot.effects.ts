import { Injectable } from '@angular/core';
import { ForgotService } from './forgot.service'
import { Action } from '@ngrx/store';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ForgotActionTypes, ForgotCompletedAction, ForgotError } from './forgot.action';
import { ForgotState } from './forgot.state';

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
            .mergeMap((res) => {
                let response: ForgotState = {                                    
                    status: "success",
                    data:{}
                }
                return Observable.from([
                    (new ForgotCompletedAction(response))
                ])
            }))
        .catch(this.handleError)


    private handleError(error) {
        return Observable.of(new ForgotError({ error: error }));
    }


    public toPayload(action) {
        return action.payload
    }
}
