export interface RegisterState {
    success: number;
    error?: any
    data?: any
}

export interface RegisterRequestState {
    userData: Object
}

export interface FeatureState {
    forgotInfo: RegisterState
}
