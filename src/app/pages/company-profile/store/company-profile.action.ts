import { Action } from '@ngrx/store';
import { type } from '../../../store/utils';
import { CompanyProfileRequestState, CompanyProfileState } from './company-profile.state';


export const CompanyProfileActionTypes = {
    COMPANYPROFILE_REQUESTED: type<string>("[CompanyProfile] - Company profile Requested-"),
    COMPANYPROFILE_COMPLETED: type<string>("[CompanyProfile] - Company profile Completed-"),
    COMPANYPROFILE_RESET: type<string>("[CompanyProfile] - Company profile Reset-"),
    COMPANYPROFILE_ERROR: type<string>("[CompanyProfile] - Company profile Error-"),
}

export const ChangePasswordActionTypes = {
    CHANGEPASSWORD_REQUESTED: type<string>("[ChangePassword] - Change Password Requested-"),
    CHANGEPASSWORD_COMPLETED: type<string>("[ChangePassword] - Change Password Completed-"),
    CHANGEPASSWORD_RESET: type<string>("[ChangePassword] - Change Password Reset-"),
    CHANGEPASSWORD_ERROR: type<string>("[ChangePassword] - Change Password Error-"),
}

/**
 * save company profile actions
 */
export class CompanyProfileRequestedAction implements Action {
    readonly type = CompanyProfileActionTypes.COMPANYPROFILE_REQUESTED;
    constructor(public payload: CompanyProfileRequestState) {
    }
}

export class CompanyProfileCompletedAction implements Action {
    readonly type = CompanyProfileActionTypes.COMPANYPROFILE_COMPLETED;
    constructor(public payload: CompanyProfileState) {
    }
}

export class CompanyProfileError implements Action {
    readonly type = CompanyProfileActionTypes.COMPANYPROFILE_ERROR
    constructor(public payload = null) { }
}

export class CompanyProfileReset implements Action {
    readonly type = CompanyProfileActionTypes.COMPANYPROFILE_RESET
    constructor(public payload = null) { }
}


 /**
  * change password actions
  */

 export class ChangePasswordRequestedAction implements Action {
    readonly type = ChangePasswordActionTypes.CHANGEPASSWORD_REQUESTED;
    constructor(public payload: CompanyProfileRequestState) {
    }
}

export class ChangePasswordCompletedAction implements Action {
    readonly type = ChangePasswordActionTypes.CHANGEPASSWORD_COMPLETED;
    constructor(public payload: CompanyProfileState) {
    }
}

export class ChangePasswordError implements Action {
    readonly type = ChangePasswordActionTypes.CHANGEPASSWORD_ERROR
    constructor(public payload = null) { }
}

export class ChangePasswordReset implements Action {
    readonly type = ChangePasswordActionTypes.CHANGEPASSWORD_RESET
    constructor(public payload = null) { }
}

export type CompanyProfileAction = CompanyProfileRequestedAction | CompanyProfileCompletedAction | CompanyProfileError | CompanyProfileReset;
export type ChangePAsswordAction = ChangePasswordRequestedAction | ChangePasswordCompletedAction | ChangePasswordError | ChangePasswordReset;