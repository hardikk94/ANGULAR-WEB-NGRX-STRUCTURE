import { MetaReducer, StoreModule, ActionReducer } from '@ngrx/store'
import { reducers } from './app.reducer'
import { authActionTypes } from './../actions/auth.action'

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    if (action.type == authActionTypes.LOGOUT_COMPLETED) {
      state = undefined;
    }
    return reducer(state, action);
  };
}

export const middlewareReducer: MetaReducer<any>[] = [debug];