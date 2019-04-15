export interface HelpState {
    success: number;
    error?: any
    data?: any
}

export interface HelpRequestState {
    helpData: Object
}


export interface FeatureState {
    helpInfo: HelpState
}
