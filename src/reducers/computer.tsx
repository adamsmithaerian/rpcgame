import { SET_GENERATED_SHAPE, RESET_GAME } from '../actions/ActionTypes';
import { Shape } from '../consts/types';

export interface State {
  readonly selectedShape: Shape;
};

const initialState = {
  selectedShape: Shape.Rock
};

export default function computer(state: State = initialState, action: any) {
  switch (action.type) {
    case SET_GENERATED_SHAPE:
      return {
        ...state,
        selectedShape: action.shape
      };
    case RESET_GAME:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
