import { CalendarActionTypes, CalendarAction } from './calendar.action';
import { CalendarState } from './calendar.state';

export const CalendarInitalState: CalendarState = {
    data: null,
    success: null
}
export function CalendarReducer(state = CalendarInitalState, action: CalendarAction): CalendarState {
    switch (action.type) {
        case CalendarActionTypes.CALENDAR_COMPLETED:
            return Object.assign({}, state, action.payload)

        case CalendarActionTypes.CALENDAR_ERROR:
            return Object.assign({}, state, action.payload)

        case CalendarActionTypes.CALENDAR_RESET:
            return CalendarInitalState
        default:
            return state
    }
}
