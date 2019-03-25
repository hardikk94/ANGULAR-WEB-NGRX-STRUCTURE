import { type } from '../utils';
import { Action } from '@ngrx/store';
import { LoadingState } from './../states/loading.state'

export const LoadingActionType = {
    LOADING_SHOW_REQUESTED: type<string>("[Loader] -Loader show Requested-"),
    LOADING_HIDE_REQUESTED: type<string>("[Loader] -Loader hide Requested-"),
    LOADING_RESET: type<string>("[Loader] -Loader Loader Requested-")
}

export class LoadingShowRequested implements Action {
    readonly type = LoadingActionType.LOADING_SHOW_REQUESTED
    constructor(public payload: LoadingState) {
    }
}

export class LoadingHideRequested implements Action {
    readonly type = LoadingActionType.LOADING_HIDE_REQUESTED
    constructor(public payload = null) {
    }
}

export class LoadingResetRequested implements Action {
    readonly type = LoadingActionType.LOADING_RESET
    constructor(public payload = null) {
    }
}

export type LoadingAction = LoadingShowRequested | LoadingHideRequested | LoadingResetRequested