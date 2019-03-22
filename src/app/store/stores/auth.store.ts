import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from '../states/app.state';
import { LoginRequestedAction } from '../actions/auth.action';
@Injectable()
export class AuthStoreService {
    private AUTH_STATE = 'authInfo';
    constructor(private store: Store<AppState>) {

    }

    public dispatchLoginAction(user) {
        this.store.dispatch(new LoginRequestedAction(user))
    }

    public storeSelect() {
        return this.store.select(this.AUTH_STATE)
    }
}