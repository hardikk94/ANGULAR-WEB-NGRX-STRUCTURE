import { Action } from '@ngrx/store';
import { type } from '../utils';

export const authActionTypes = {
    LOGIN_REQUESTED: type<string>("[Login] -Login Requested"),
    LOGIN_COMPLETED: type<string>("[Login] -Login Completed"),
    LOGOUT_REQUESTED: type<string>("[Login] -Logout Requested"),
    LOGOUT_COMPLETED: type<string>("[Login] -Logout Completed"),
    SIGNUP_REQUESTED: type<string>("[Signup] - Signup Requested"),
    SIGNUP_COMPLETED: type<string>("[Signup] - Signup Completed"),
    FORGOT_REQUESTED: type<string>("[Forgot] - Forgot Requested"),
    FORGOT_COMPLETED: type<string>("[Forgot] - Forgot Completed"),
    AUTH_ERROR: type<string>("[Auth] - Auth Error"),
}

export class LoginRequestedAction implements Action {
    type = authActionTypes.LOGIN_REQUESTED;
    constructor(public payload: any) {
    }
}

export class LoginCompletedAction implements Action {
    type = authActionTypes.LOGIN_COMPLETED;
    constructor(public payload: any) {
    }
}


export class LogoutRequestedAction implements Action {
    type = authActionTypes.LOGOUT_REQUESTED;
    constructor(public payload: any) {
    }
}

export class LogoutCompletedAction implements Action {
    type = authActionTypes.LOGOUT_COMPLETED;
    constructor(public payload: any) {
    }
}

export class AuthErrorAction implements Action {
    type = authActionTypes.AUTH_ERROR;
    constructor(public payload: any) {
    }
}

export class SignupRequestedAction implements Action {
    type = authActionTypes.SIGNUP_REQUESTED;
    constructor(public payload: any) {
    }
}

export class SignupCompletedAction implements Action {
    type = authActionTypes.SIGNUP_COMPLETED;
    constructor(public payload: any) {
    }
}

export class ForgotRequestedAction implements Action {
    type = authActionTypes.FORGOT_REQUESTED;
    constructor(public payload: any) {
    }
}

export class ForgotCompletedAction implements Action {
    type = authActionTypes.FORGOT_COMPLETED;
    constructor(public payload: any) {
    }
}


export type AuthAction = LoginRequestedAction | LoginCompletedAction | LogoutRequestedAction | LogoutCompletedAction | AuthErrorAction |
    SignupRequestedAction | SignupCompletedAction | ForgotRequestedAction | ForgotCompletedAction;