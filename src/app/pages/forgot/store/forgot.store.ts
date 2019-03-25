import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { ForgotRequestedAction, ForgotReset } from './forgot.action'
import { FeatureState } from './forgot.state'

@Injectable()
export class ForgotStoreService {
    private FORGOT_STATE = 'forgotInfo';
    constructor(private store: Store<FeatureState>) {

    }

    public dispatchForgotAction(user) {
        this.store.dispatch(new ForgotRequestedAction(user))
    }

    public storeSelect() {
        return this.store.select(this.FORGOT_STATE)
    }

    public dispatchResetForgot() {
        this.store.dispatch(new ForgotReset())
    }
}