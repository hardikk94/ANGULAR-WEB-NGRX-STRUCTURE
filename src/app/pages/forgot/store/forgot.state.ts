export interface ForgotState{
    success:number;
    error?:any
    data?:any
}

export interface ForgotRequsetState{
    email:string
}

export interface FeatureState {
    forgotInfo: ForgotState
}
