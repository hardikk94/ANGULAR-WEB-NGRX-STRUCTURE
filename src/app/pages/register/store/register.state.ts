export interface RegisterState {
    status: string;
    error?: any
    data?: any
}

export interface RegisterRequestState {
    userData: Object
}

export interface FeatureState {
    forgotInfo: RegisterState
}
