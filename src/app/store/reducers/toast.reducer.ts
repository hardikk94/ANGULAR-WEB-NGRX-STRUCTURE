import { ToastState } from '../states/toast.state';
import { ToastAction, ToastActionType } from '../actions/toast.action';

export const toastInitialState: ToastState = {
    title: null,
    message: null,
    type: null,
}

export function ToastReducer(state = toastInitialState, action: ToastAction): ToastState {
    switch (action.type) {
        case ToastActionType.TOAST_SHOW_REQUESTED:
            return Object.assign({}, state, action.payload)
        case ToastActionType.TOAST_HIDE_REQUESTED:
            return toastInitialState
        case ToastActionType.TOAST_RESET:
            return toastInitialState

        default:
    }   return toastInitialState
}