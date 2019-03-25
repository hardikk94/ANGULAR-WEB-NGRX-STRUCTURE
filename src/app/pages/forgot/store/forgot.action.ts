import { Action } from '@ngrx/store';
import { type } from './../../../store/utils';
import { ForgotRequsetState, ForgotState } from './forgot.state';


export const ForgotActionTypes = {
    FORGOT_REQUESTED: type<string>("[Forgot] - Forgot Requested-"),
    FORGOT_COMPLETED: type<string>("[Forgot] - Forgot Completed-"),
    FORGOT_RESET: type<string>("[Forgot] - Forgot Reset-"),
    FORGOT_ERROR: type<string>("[Forgot] - Forgot Error-"),
}

export class ForgotRequestedAction implements Action {
    readonly type = ForgotActionTypes.FORGOT_REQUESTED;
    constructor(public payload: ForgotRequsetState) {
    }
}

export class ForgotCompletedAction implements Action {
    readonly type = ForgotActionTypes.FORGOT_COMPLETED;
    constructor(public payload: ForgotState) {
    }
}

export class ForgotError implements Action {
    readonly type = ForgotActionTypes.FORGOT_ERROR
    constructor(public payload = null) { }
}

export class ForgotReset implements Action {
    readonly type = ForgotActionTypes.FORGOT_RESET
    constructor(public payload = null) { }
}


export type ForgotAction = ForgotRequestedAction | ForgotCompletedAction | ForgotError | ForgotReset;