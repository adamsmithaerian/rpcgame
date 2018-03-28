import { SET_RESULT } from '../actions/ActionTypes';
import { Result } from '../consts/types';
import app from './app';

describe('app reducer should', () => {
    it('return the initial state', () => {
        expect(app(undefined, {})).toEqual({
            result: Result.Win,
            showResult: false
        });
    });
    
    it('handle SET_RESULT', () => {
        expect(
          app(undefined, {
            type: SET_RESULT,
            result: Result.Win,
            showResult: true
          })
        ).toEqual({
            result: Result.Win,
            showResult: true
        });
    });
});