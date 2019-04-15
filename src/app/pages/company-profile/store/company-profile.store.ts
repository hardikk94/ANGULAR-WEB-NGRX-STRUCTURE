import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { CompanyProfileRequestedAction, CompanyProfileReset, ChangePasswordRequestedAction } from './company-profile.action'
import { FeatureState } from './company-profile.state'
import { LoadingShowRequested } from 'src/app/store/actions/loading.action';

@Injectable()
export class CompanyProfileStoreService {
    private COMPANYPROFILE_STATE = 'companyProfileInfo';
    constructor(private store: Store<FeatureState>) {
    }

    public dispatchCompanyProfileAction(companyprofile) {
        this.store.dispatch(new CompanyProfileRequestedAction(companyprofile))
    }

    public storeSelect() {
        return this.store.select(this.COMPANYPROFILE_STATE)
    }

    public dispatchResetCompanyProfile() {
        this.store.dispatch(new CompanyProfileReset())
    }

    public dispatchLoader(loader)
    {
        this.store.dispatch(new LoadingShowRequested(loader))
    }

    public dispatchChangePasswordAction(changepassword){
        this.store.dispatch(new ChangePasswordRequestedAction(changepassword))
    }
}