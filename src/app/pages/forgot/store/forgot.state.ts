export interface ForgotState{
    status:string;
    error?:any
    data?:any
}

export interface ForgotRequsetState{
    email:string
}

export interface FeatureState {
    forgotInfo: ForgotState
}
