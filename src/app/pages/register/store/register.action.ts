import { Action } from '@ngrx/store';
import { type } from './../../../store/utils';
import { RegisterRequestState, RegisterState } from './register.state';


export const RegisterActionTypes = {
    REGISTER_REQUESTED: type<string>("[Signup] - Signup Requested-"),
    REGISTER_COMPLETED: type<string>("[Signup] - Signup Completed-"),
    REGISTER_RESET: type<string>("[Signup] - Signup Reset-"),
    REGISTER_ERROR: type<string>("[Signup] - Signup Error-"),
}

export class RegisterRequestedAction implements Action {
    readonly type = RegisterActionTypes.REGISTER_REQUESTED;
    constructor(public payload: RegisterRequestState) {
    }
}

export class RegisterCompletedAction implements Action {
    readonly type = RegisterActionTypes.REGISTER_COMPLETED;
    constructor(public payload: RegisterState) {
    }
}

export class RegisterError implements Action {
    readonly type = RegisterActionTypes.REGISTER_ERROR
    constructor(public payload = null) { }
}

export class RegisterReset implements Action {
    readonly type = RegisterActionTypes.REGISTER_RESET
    constructor(public payload = null) { }
}

export type RegisterAction = RegisterRequestedAction | RegisterCompletedAction | RegisterError | RegisterReset;