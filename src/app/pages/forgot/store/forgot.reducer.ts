import { ForgotState, ForgotRequsetState } from './forgot.state';
import { ForgotAction, ForgotActionTypes } from './forgot.action'

export const forgotInitalState: ForgotState = {
    data: null,
    success: null
}
export function forgotReducer(state = forgotInitalState, action: ForgotAction): ForgotState {
    switch (action.type) {
        case ForgotActionTypes.FORGOT_COMPLETED:
            return Object.assign({}, state, action.payload)

        case ForgotActionTypes.FORGOT_ERROR:
            return Object.assign({}, state, action.payload)

        case ForgotActionTypes.FORGOT_RESET:
            return forgotInitalState;
        default:
            return state
    }
}
