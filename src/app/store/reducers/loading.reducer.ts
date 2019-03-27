import { LoadingState } from '../states/loading.state';
import { LoadingAction, LoadingActionType } from '../actions/loading.action';

export const LoadingInitialState: LoadingState = {
    isLoading: false,
    message: null,
}

export function LoadingReducer(state = LoadingInitialState, action: LoadingAction): LoadingState {
    switch (action.type) {
        case LoadingActionType.LOADING_SHOW_REQUESTED:{
            return Object.assign({}, state, action.payload);
        }            
        case LoadingActionType.LOADING_HIDE_REQUESTED:{
            return LoadingInitialState;
        }            
        default:{            
            return state;
        }
            
    }
}