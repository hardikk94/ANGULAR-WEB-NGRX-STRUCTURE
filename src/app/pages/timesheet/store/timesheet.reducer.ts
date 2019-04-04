import { TimesheetRequestState, TimesheetState } from './timesheet.state';
import { TimesheetActionTypes, TimesheetAction } from './timesheet.action'

export const TimesheetInitalState: TimesheetState = {
    data: null,
    success: null
}
export function TimesheetReducer(state = TimesheetInitalState, action: TimesheetAction): TimesheetState {
    switch (action.type) {
        case TimesheetActionTypes.TIMESHEET_COMPLETED:
            return Object.assign({}, state, action.payload)

        case TimesheetActionTypes.TIMESHEET_ERROR:
            return Object.assign({}, state, action.payload)

        case TimesheetActionTypes.TIMESHEET_RESET:
            return TimesheetInitalState
        default:
            return state
    }
}
