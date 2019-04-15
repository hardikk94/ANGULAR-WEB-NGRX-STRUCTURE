import { DashboardAction, DashboardActionTypes } from './dashboard.action';
import { DashboardState } from './dashboard.state';

export const DashboardInitalState: DashboardState = {
    data: null,
    success: null
}
export function DashboardReducer(state = DashboardInitalState, action: DashboardAction): DashboardState {
    switch (action.type) {
        case DashboardActionTypes.DASHBOARD_COMPLETED:
            return Object.assign({}, state, action.payload)

        case DashboardActionTypes.DASHBOARD_ERROR:
            return Object.assign({}, state, action.payload)

        case DashboardActionTypes.DASHBOARD_RESET:
            return DashboardInitalState
        default:
            return state
    }
}
