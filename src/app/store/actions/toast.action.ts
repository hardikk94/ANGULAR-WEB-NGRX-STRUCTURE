import { type } from '../utils';
import { Action } from '@ngrx/store';
import { ToastState } from '../states/toast.state';

export const ToastActionType = {
    TOAST_SHOW_REQUESTED: type<string>("[Toast] -Toast show Requested-"),
    TOAST_HIDE_REQUESTED: type<string>("[Toast] -Toast hide Requested-"),
    TOAST_RESET: type<string>("[Toast] -Toast reset Requested-")
}

export class ToastShowRequested implements Action {
    readonly type = ToastActionType.TOAST_SHOW_REQUESTED
    constructor(public payload: ToastState) {
    }
}

export class ToastHideRequested implements Action {
    readonly type = ToastActionType.TOAST_HIDE_REQUESTED
    constructor(public payload = null) {
    }
}

export class ToastResetRequested implements Action {
    readonly type = ToastActionType.TOAST_RESET
    constructor(public payload = null) {
    }
}

export type ToastAction = ToastShowRequested | ToastHideRequested | ToastResetRequested