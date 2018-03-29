import { Shape, Result } from '../consts/types';
import {
  SET_GENERATED_SHAPE,
  SET_SELECTED_SHAPE,
  SET_RESULT
} from './ActionTypes';

import {
  setSelectShape,
  setGeneratedShape,
  setResult,
  submitShape
} from './index';

it('should return correct action for setSelectShape', () => {
  expect(setSelectShape(Shape.Rock)).toEqual({
    type: SET_SELECTED_SHAPE,
    shape: Shape.Rock
  });
});

it('should return correct action for setGeneratedShape', () => {
  expect(setGeneratedShape(Shape.Rock)).toEqual({
    type: SET_GENERATED_SHAPE,
    shape: Shape.Rock
  });
});

it('should return correct action for setResult', () => {
  expect(setResult(Result.Win)).toEqual({
    type: SET_RESULT,
    result: Result.Win
  });
});

it('should call dispatch method twice when submitShape is envoked', () => {
  const getState = () => ({
    user: {
      selectedShape: Shape.Rock
    }
  });

  const dispatch = jest.fn();
  submitShape()(dispatch, getState);

  expect(dispatch.mock.calls.length).toBe(2);
});
