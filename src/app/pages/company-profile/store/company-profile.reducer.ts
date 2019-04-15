import { CompanyProfileActionTypes, CompanyProfileAction } from './company-profile.action'
import { CompanyProfileState } from './company-profile.state';

export const CompanyProfileInitalState: CompanyProfileState = {
    data: null,
    success: null
}
export function CompanyProfileReducer(state = CompanyProfileInitalState, action: CompanyProfileAction): CompanyProfileState {
    switch (action.type) {
        case CompanyProfileActionTypes.COMPANYPROFILE_COMPLETED:
            return Object.assign({}, state, action.payload)

        case CompanyProfileActionTypes.COMPANYPROFILE_ERROR:
            return Object.assign({}, state, action.payload)

        case CompanyProfileActionTypes.COMPANYPROFILE_RESET:
            return CompanyProfileInitalState
        default:
            return state
    }
}
