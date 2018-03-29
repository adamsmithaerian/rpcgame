import { SET_RESULT, RESET_GAME } from '../actions/ActionTypes';
import { Result } from '../consts/types';

export interface State {
  readonly result: Result;
  readonly showResult: boolean;
}

const initialState: State = {
  result: Result.Win,
  showResult: false
};

export default function app(state: State = initialState, action: any) {
  switch (action.type) {
    case SET_RESULT:
      return {
        ...state,
        result: action.result,
        showResult: true
      };
    case RESET_GAME:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
