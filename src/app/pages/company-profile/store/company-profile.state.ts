export interface CompanyProfileState {
    success: number;
    error?: any
    data?: any
}

export interface CompanyProfileRequestState {
    companyProfileData: Object
}


export interface FeatureState {
    companyProfileInfo: CompanyProfileState
}
