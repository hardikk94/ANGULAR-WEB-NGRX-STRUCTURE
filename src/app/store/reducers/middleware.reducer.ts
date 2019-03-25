import { MetaReducer, StoreModule,ActionReducer } from '@ngrx/store'
import { reducers } from './app.reducer'

export function debug(reducer: ActionReducer<any>):ActionReducer<any>
{
    return function(state, action) {
        // console.log('state', state);
        // console.log('action', action);    
        return reducer(state, action);
      };
}

export const middlewareReducer: MetaReducer<any>[] = [debug];