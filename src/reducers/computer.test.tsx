import { SET_GENERATED_SHAPE, RESET_GAME } from '../actions/ActionTypes';
import { Shape } from '../consts/types';
import computer from './computer';

describe('computer reducer should', () => {
    it('should return the initial state', () => {
        expect(computer(undefined, {})).toEqual({
            selectedShape: Shape.Rock
        });
    });

    it('handle SET_GENERATED_SHAPE', () => {
        expect(
        computer(undefined, {
            type: SET_GENERATED_SHAPE,
            shape: Shape.Paper
        })
        ).toEqual({
            selectedShape: Shape.Paper
        });
    });

    it('handle RESET_GAME', () => {
        expect(
        computer(undefined, {
            type: RESET_GAME,
        })
        ).toEqual({
            selectedShape: Shape.Rock
        });
    });
});