import { RegisterRequestState, RegisterState } from './register.state';
import { RegisterActionTypes, RegisterAction } from './register.action'

export const RegisterInitalState: RegisterState = {
    data: null,
    success: null
}
export function RegisterReducer(state = RegisterInitalState, action: RegisterAction): RegisterState {
    switch (action.type) {
        case RegisterActionTypes.REGISTER_COMPLETED:
            return Object.assign({}, state, action.payload)

        case RegisterActionTypes.REGISTER_ERROR:
            return Object.assign({}, state, action.payload)

        case RegisterActionTypes.REGISTER_RESET:
            return RegisterInitalState
        default:
            return state
    }
}
