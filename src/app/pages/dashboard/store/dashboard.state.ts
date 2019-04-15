export interface DashboardState {
    success: number;
    error?: any
    data?: any
}

export interface DashboardRequestState {
    dashboardData: Object
}


export interface FeatureState {
    dashboardInfo: DashboardState
}
