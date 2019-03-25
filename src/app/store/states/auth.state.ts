
export interface AuthState {
    userData?: any;
    isLoggedIn: boolean;
    status:string;    
    error?:any;
}

export interface AuthRequestState{
    email:string;
    password:string;
}

export interface ResponseState{
    status: string;
    message: string;
    data: Object;
    error: Object;
}