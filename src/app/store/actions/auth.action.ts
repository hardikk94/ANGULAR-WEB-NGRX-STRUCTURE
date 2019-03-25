import { Action } from '@ngrx/store';
import { type } from '../utils';
import { AuthRequestState , AuthState} from './../states/auth.state';

export const authActionTypes = {
    LOGIN_REQUESTED: type<string>("[Login] -Login Requested-"),
    LOGIN_COMPLETED: type<string>("[Login] -Login Completed-"),
    LOGOUT_REQUESTED: type<string>("[Login] -Logout Requested-"),
    LOGOUT_COMPLETED: type<string>("[Login] -Logout Completed-"),        
    AUTH_ERROR: type<string>("[Auth] - Auth Error-"),
}

export class LoginRequestedAction implements Action {
    readonly type = authActionTypes.LOGIN_REQUESTED;
    constructor(public payload: AuthRequestState) {
    }
}

export class LoginCompletedAction implements Action {
    readonly type = authActionTypes.LOGIN_COMPLETED;
    constructor(public payload: AuthState) {
    }
}


export class LogoutRequestedAction implements Action {
    readonly type = authActionTypes.LOGOUT_REQUESTED;
    constructor(public payload: any) {
    }
}

export class LogoutCompletedAction implements Action {
    readonly type = authActionTypes.LOGOUT_COMPLETED;
    constructor(public payload: any) {
    }
}

export class AuthErrorAction implements Action {
    readonly type = authActionTypes.AUTH_ERROR;
    constructor(public payload: any) {
    }
}



export type AuthAction = LoginRequestedAction | LoginCompletedAction | LogoutRequestedAction | LogoutCompletedAction | AuthErrorAction   