import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { RegisterRequestedAction, RegisterReset } from './register.action'
import { FeatureState } from './register.state'
import { LoadingShowRequested } from 'src/app/store/actions/loading.action';

@Injectable()
export class RegisterStoreService {
    private REGISTER_STATE = 'registerInfo';
    constructor(private store: Store<FeatureState>) {

    }

    public dispatchRegisterAction(user) {
        this.store.dispatch(new RegisterRequestedAction(user))
    }

    public storeSelect() {
        return this.store.select(this.REGISTER_STATE)
    }

    public dispatchResetRegister() {
        this.store.dispatch(new RegisterReset())
    }

    public dispatchLoader(loader)
    {
        this.store.dispatch(new LoadingShowRequested(loader))
    }
}