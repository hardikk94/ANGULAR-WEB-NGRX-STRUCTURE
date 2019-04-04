export interface TimesheetState {
    success: number;
    error?: any
    data?: any
}

export interface TimesheetRequestState {
    timesheetData: Object
}


export interface FeatureState {
    timesheetInfo: TimesheetState
}
