import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { Observable, from } from 'rxjs';
import { LoadingState } from '../../../store/states/loading.state'
import { ToastState } from 'src/app/store/states/toast.state';
import { ToastShowRequested } from 'src/app/store/actions/toast.action';
import { LoadingHideRequested } from 'src/app/store/actions/loading.action';
import {CompanyProfileActionTypes, CompanyProfileCompletedAction, CompanyProfileError, ChangePasswordActionTypes} from './company-profile.action';
import { CompanyProfileService } from './company-profile.service';
import { CompanyProfileState } from './company-profile.state';

@Injectable()
export class CompanyProfileEffects {
    constructor(
        public companyProfileService: CompanyProfileService,
        private actions$: Actions) {
    }
    /**
     * save company profile
     */
    @Effect()
    saveCompanyProfileAction$: Observable<any> = this.actions$
        .pipe(
            ofType(CompanyProfileActionTypes.COMPANYPROFILE_REQUESTED))
        .map(this.toPayload)
        .switchMap(payload => this.companyProfileService.saveCompanyProfile(payload)
            .mergeMap((res: any) => {
                let loading: LoadingState = { isLoading: false, message: null }
                let toast: ToastState;
                let response: CompanyProfileState;
                if (res.success) {
                    toast = { type: 'success', message: res.message, title: 'SUCCESS', isToast: true }
                    response = { success: 1, data: res.data }
                }
                else {
                    response = { success: 0, data:{}, error: res.error }
                    toast = { type: 'error', message: res.error, title: 'ERROR', isToast: true }
                }
                return Observable.from([
                    (new ToastShowRequested(toast)),
                    (new LoadingHideRequested(loading)),
                    (new CompanyProfileCompletedAction(response)),
                ])
            }))
        .catch(this.handleError)

        /**
         * change password
         * 
         */

        @Effect()
        changePasswordAction$: Observable<any> = this.actions$
            .pipe(
                ofType(ChangePasswordActionTypes.CHANGEPASSWORD_REQUESTED))
            .map(this.toPayload)
            .switchMap(payload => this.companyProfileService.changePassword(payload)
                .mergeMap((res: any) => {
                    let loading: LoadingState = { isLoading: false, message: null }
                    let toast: ToastState;
                    let response: CompanyProfileState;
                    if (res.success) {
                        toast = { type: 'success', message: res.message, title: 'SUCCESS', isToast: true }
                        response = { success: 1, data: res.data }
                    }
                    else {
                        response = { success: 0, data:{}, error: res.error }
                        toast = { type: 'error', message: res.error, title: 'ERROR', isToast: true }
                    }
                    return Observable.from([
                        (new ToastShowRequested(toast)),
                        (new LoadingHideRequested(loading)),
                        (new CompanyProfileCompletedAction(response)),
                    ])
                }))
            .catch(this.handleError)


    private handleError(error) {
        let loading: LoadingState = { isLoading: false, message: null }
        let toast: ToastState = { type: 'error', message: error, title: 'ERROR', isToast: true }
        let companyProfileError: CompanyProfileState = {
            success: 0,
            data: {},
            error: error
        }
        return Observable.from([
            (new ToastShowRequested(toast)),
            (new LoadingHideRequested(loading)),
            (new CompanyProfileError(companyProfileError))
        ])
    }


    public toPayload(action) {
        return action.payload
    }
}
