import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { TimesheetRequestedAction, TimesheetReset } from './timesheet.action'
import { FeatureState } from './timesheet.state'
import { LoadingShowRequested } from 'src/app/store/actions/loading.action';

@Injectable()
export class TimesheetStoreService {
    private TIMESHEET_STATE = 'timesheetInfo';
    constructor(private store: Store<FeatureState>) {
    }

    public dispatchTimesheetAction(timesheet) {
        this.store.dispatch(new TimesheetRequestedAction(timesheet))
    }

    public storeSelect() {
        return this.store.select(this.TIMESHEET_STATE)
    }

    public dispatchResetTimesheet() {
        this.store.dispatch(new TimesheetReset())
    }

    public dispatchLoader(loader)
    {
        this.store.dispatch(new LoadingShowRequested(loader))
    }
}