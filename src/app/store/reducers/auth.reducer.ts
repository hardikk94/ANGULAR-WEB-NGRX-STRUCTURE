import { AuthState } from '../states/auth.state';
import { AuthAction, authActionTypes } from './../actions/auth.action'

export const authInitalState: AuthState = {
    userData: null,
    isLoggedIn: false,
    status: null
}

export function authReducer(state = authInitalState, action: AuthAction): AuthState {
    switch (action.type) {
        case authActionTypes.LOGIN_COMPLETED:
            return Object.assign({}, state, action.payload)

        case authActionTypes.LOGOUT_COMPLETED:
            return Object.assign({}, state, action.payload)

        case authActionTypes.FORGOT_COMPLETED:
            return Object.assign({}, state, action.payload)

        case authActionTypes.SIGNUP_COMPLETED:
            return Object.assign({}, state, action.payload)
        default:
            return authInitalState
    }
}
