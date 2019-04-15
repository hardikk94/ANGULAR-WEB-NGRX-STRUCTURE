import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { LoadingShowRequested } from 'src/app/store/actions/loading.action';
import { FeatureState } from './help.state';
import { HelpRequestedAction, HelpReset } from './help.action';

@Injectable()
export class HelpStoreService {
    private HELP_STATE = 'helpInfo';
    constructor(private store: Store<FeatureState>) {
    }

    public dispatchHelpAction(help) {
        this.store.dispatch(new HelpRequestedAction(help))
    }

    public storeSelect() {
        return this.store.select(this.HELP_STATE)
    }

    public dispatchResetHelp() {
        this.store.dispatch(new HelpReset())
    }

    public dispatchLoader(loader)
    {
        this.store.dispatch(new LoadingShowRequested(loader))
    }
}