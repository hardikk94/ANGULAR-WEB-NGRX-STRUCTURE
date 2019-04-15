import { Action } from '@ngrx/store';
import { type } from '../../../store/utils';
import { CalendarRequestState, CalendarState } from './calendar.state';


export const CalendarActionTypes = {
    CALENDAR_REQUESTED: type<string>("[Calendar] - Calendar Requested-"),
    CALENDAR_COMPLETED: type<string>("[Calendar] - Calendar Completed-"),
    CALENDAR_RESET: type<string>("[Calendar] - Calendar Reset-"),
    CALENDAR_ERROR: type<string>("[Calendar] - Calendar Error-"),
}

/**
 * save calendar actions
 */
export class CalendarRequestedAction implements Action {
    readonly type = CalendarActionTypes.CALENDAR_REQUESTED;
    constructor(public payload: CalendarRequestState) {
    }
}

export class CalendarCompletedAction implements Action {
    readonly type = CalendarActionTypes.CALENDAR_COMPLETED;
    constructor(public payload: CalendarState) {
    }
}

export class CalendarError implements Action {
    readonly type = CalendarActionTypes.CALENDAR_ERROR
    constructor(public payload = null) { }
}

export class CalendarReset implements Action {
    readonly type = CalendarActionTypes.CALENDAR_RESET
    constructor(public payload = null) { }
}

export type CalendarAction = CalendarRequestedAction | CalendarCompletedAction | CalendarError | CalendarReset;