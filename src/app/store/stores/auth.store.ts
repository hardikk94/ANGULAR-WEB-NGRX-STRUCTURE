import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from '../states/app.state';
import { LoginRequestedAction, LogoutRequestedAction, LogoutCompletedAction } from '../actions/auth.action';
import { SessionStorageService } from 'src/app/core/providers/session-storage.service';
@Injectable()
export class AuthStoreService {
    private AUTH_STATE = 'authInfo';
    constructor(private store: Store<AppState>,
        public sessionStorage: SessionStorageService) { }

    public dispatchLoginAction(user) {
        this.store.dispatch(new LoginRequestedAction(user))
    }

    public storeSelect() {
        return this.store.select(this.AUTH_STATE)
    }

    public dispatchLogoutAction() {
        this.sessionStorage.removeItem("authtoken");
        this.store.dispatch(new LogoutCompletedAction(null))
    }
}