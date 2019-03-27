
export interface AuthState {
    userData?: any;
    isLoggedIn: boolean;
    success:number;    
    error?:any;
}

export interface AuthRequestState{
    email:string;
    password:string;
}

export interface ResponseState{
    success: number;
    message: string;
    data: Object;
    error: Object;
}