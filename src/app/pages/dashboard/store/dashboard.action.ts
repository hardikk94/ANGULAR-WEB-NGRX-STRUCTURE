import { Action } from '@ngrx/store';
import { type } from '../../../store/utils';
import { DashboardRequestState, DashboardState } from './dashboard.state';


export const DashboardActionTypes = {
    DASHBOARD_REQUESTED: type<string>("[Dashboard] - Dashboard Requested-"),
    DASHBOARD_COMPLETED: type<string>("[Dashboard] - Dashboard Completed-"),
    DASHBOARD_RESET: type<string>("[Dashboard] - Dashboard Reset-"),
    DASHBOARD_ERROR: type<string>("[Dashboard] - Dashboard Error-"),
}

export class DashboardRequestedAction implements Action {
    readonly type = DashboardActionTypes.DASHBOARD_REQUESTED;
    constructor(public payload: DashboardRequestState) {
    }
}

export class DashboardCompletedAction implements Action {
    readonly type = DashboardActionTypes.DASHBOARD_COMPLETED;
    constructor(public payload: DashboardState) {
    }
}

export class DashboardError implements Action {
    readonly type = DashboardActionTypes.DASHBOARD_ERROR
    constructor(public payload = null) { }
}

export class DashboardReset implements Action {
    readonly type = DashboardActionTypes.DASHBOARD_RESET
    constructor(public payload = null) { }
}

export type DashboardAction = DashboardRequestedAction | DashboardCompletedAction | DashboardError | DashboardReset;