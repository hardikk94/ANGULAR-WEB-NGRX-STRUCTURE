import { HelpActionTypes, HelpAction } from './help.action';
import { HelpState } from './help.state';

export const HelpInitalState: HelpState = {
    data: null,
    success: null
}
export function HelpReducer(state = HelpInitalState, action: HelpAction): HelpState {
    switch (action.type) {
        case HelpActionTypes.HELP_COMPLETED:
            return Object.assign({}, state, action.payload)

        case HelpActionTypes.HELP_ERROR:
            return Object.assign({}, state, action.payload)

        case HelpActionTypes.HELP_RESET:
            return HelpInitalState
        default:
            return state
    }
}
