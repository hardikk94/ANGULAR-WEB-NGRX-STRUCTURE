import { Action } from '@ngrx/store';
import { type } from '../../../store/utils';
import { TimesheetRequestState, TimesheetState } from './timesheet.state';


export const TimesheetActionTypes = {
    TIMESHEET_REQUESTED: type<string>("[Timesheet] - Timesheet Requested-"),
    TIMESHEET_COMPLETED: type<string>("[Timesheet] - Timesheet Completed-"),
    TIMESHEET_RESET: type<string>("[Timesheet] - Timesheet Reset-"),
    TIMESHEET_ERROR: type<string>("[Timesheet] - Timesheet Error-"),
}

export class TimesheetRequestedAction implements Action {
    readonly type = TimesheetActionTypes.TIMESHEET_REQUESTED;
    constructor(public payload: TimesheetRequestState) {
    }
}

export class TimesheetCompletedAction implements Action {
    readonly type = TimesheetActionTypes.TIMESHEET_COMPLETED;
    constructor(public payload: TimesheetState) {
    }
}

export class TimesheetError implements Action {
    readonly type = TimesheetActionTypes.TIMESHEET_ERROR
    constructor(public payload = null) { }
}

export class TimesheetReset implements Action {
    readonly type = TimesheetActionTypes.TIMESHEET_RESET
    constructor(public payload = null) { }
}

export type TimesheetAction = TimesheetRequestedAction | TimesheetCompletedAction | TimesheetError | TimesheetReset;