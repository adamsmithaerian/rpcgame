import { SET_SELECTED_SHAPE, RESET_GAME } from '../actions/ActionTypes';
import { Shape } from '../consts/types';
import user from './user';

describe('user reducer should', () => {
    it('should return the initial state', () => {
        expect(user(undefined, {})).toEqual({
            selectedShape: Shape.Rock
        });
    });
    
    it('handle SET_SELECTED_SHAPE', () => {
        expect(
          user(undefined, {
            type: SET_SELECTED_SHAPE,
            shape: Shape.Paper
          })
        ).toEqual({
            selectedShape: Shape.Paper
        });
    });
    
    it('handle RESET_GAME', () => {
        expect(
          user(undefined, {
            type: RESET_GAME,
          })
        ).toEqual({
            selectedShape: Shape.Rock
        });
    });
});