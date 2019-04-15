export interface CalendarState {
    success: number;
    error?: any
    data?: any
}

export interface CalendarRequestState {
    calendarData: Object
}


export interface FeatureState {
    calendarInfo: CalendarState
}
