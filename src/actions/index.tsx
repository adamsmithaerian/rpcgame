import { Shape, Result } from '../consts/types';
import { getRandomShape, calculateRPSResult } from '../libs/utils';

import {
  SET_SELECTED_SHAPE,
  SET_GENERATED_SHAPE,
  SET_RESULT,
  RESET_GAME
} from './ActionTypes';

export const setSelectShape = (shape: Shape): any => ({
  type: SET_SELECTED_SHAPE,
  shape
});

export const setGeneratedShape = (shape: Shape): any => ({
  type: SET_GENERATED_SHAPE,
  shape
});

export const setResult = (result: Result): any => ({
  type: SET_RESULT,
  result
});

export const resetGame = (): any => ({
  type: RESET_GAME
});

export const submitShape = () => (dispatch: any, getState: () => any) => {
  const computer: Shape = getRandomShape();
  dispatch(setGeneratedShape(computer));

  const result: Result = calculateRPSResult(
    getState().user.selectedShape,
    computer
  );
  dispatch(setResult(result));
};
