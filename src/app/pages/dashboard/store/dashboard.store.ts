import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { FeatureState } from './dashboard.state'
import { LoadingShowRequested } from 'src/app/store/actions/loading.action';
import { DashboardRequestedAction, DashboardReset } from './dashboard.action';

@Injectable()
export class DashboardStoreService {
    private Dashboard_STATE = 'dashboardInfo';
    constructor(private store: Store<FeatureState>) {
    }

    public dispatchDashboardAction(dashboarddata) {
        this.store.dispatch(new DashboardRequestedAction(dashboarddata))
    }

    public storeSelect() {
        return this.store.select(this.Dashboard_STATE)
    }

    public dispatchResetDashboard() {
        this.store.dispatch(new DashboardReset())
    }

    public dispatchLoader(loader)
    {
        this.store.dispatch(new LoadingShowRequested(loader))
    }
}