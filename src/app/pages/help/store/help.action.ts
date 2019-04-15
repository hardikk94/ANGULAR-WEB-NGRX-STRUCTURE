import { Action } from '@ngrx/store';
import { type } from '../../../store/utils';
import { HelpRequestState, HelpState } from './help.state';


export const HelpActionTypes = {
    HELP_REQUESTED: type<string>("[Help] - Help Requested-"),
    HELP_COMPLETED: type<string>("[Help] - Help Completed-"),
    HELP_RESET: type<string>("[Help] - Help Reset-"),
    HELP_ERROR: type<string>("[Help] - Help Error-"),
}

/**
 * save help actions
 */
export class HelpRequestedAction implements Action {
    readonly type = HelpActionTypes.HELP_REQUESTED;
    constructor(public payload: HelpRequestState) {
    }
}

export class HelpCompletedAction implements Action {
    readonly type = HelpActionTypes.HELP_COMPLETED;
    constructor(public payload: HelpState) {
    }
}

export class HelpError implements Action {
    readonly type = HelpActionTypes.HELP_ERROR
    constructor(public payload = null) { }
}

export class HelpReset implements Action {
    readonly type = HelpActionTypes.HELP_RESET
    constructor(public payload = null) { }
}

export type HelpAction = HelpRequestedAction | HelpCompletedAction | HelpError | HelpReset;