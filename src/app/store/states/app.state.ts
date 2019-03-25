import { AuthState } from './auth.state';
import { ToastState } from './toast.state'
import { LoadingState } from './loading.state'

export interface AppState {
    authInfo: AuthState,
    toastInfo: ToastState,
    loadingInfo: LoadingState,
}

