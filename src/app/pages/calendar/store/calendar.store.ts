import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { LoadingShowRequested } from 'src/app/store/actions/loading.action';
import { FeatureState } from './calendar.state';
import { CalendarRequestedAction, CalendarReset } from './calendar.action';

@Injectable()
export class CalendarStoreService {
    private CALENDAR_STATE = 'calendarInfo';
    constructor(private store: Store<FeatureState>) {
    }

    public dispatchCalendarAction(calendar) {
        this.store.dispatch(new CalendarRequestedAction(calendar))
    }

    public storeSelect() {
        return this.store.select(this.CALENDAR_STATE)
    }

    public dispatchResetCalendar() {
        this.store.dispatch(new CalendarReset())
    }

    public dispatchLoader(loader)
    {
        this.store.dispatch(new LoadingShowRequested(loader))
    }
}