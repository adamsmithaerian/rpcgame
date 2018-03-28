import { Shape, Result } from '../consts/types';
import { getRandomShape, calculateRPSResult } from './utils';

describe('utils should', () => {
  it('pick a random shape', () => {
    const shape: Shape = getRandomShape();
    expect(shape >= 0 && shape <= 2).toBeTruthy();
  });

  it('return win result', () => {
    const result: Result = calculateRPSResult(Shape.Paper, Shape.Rock);
    expect(result).toBe(Result.Win);
  });

  it('return lose result', () => {
    const result: Result = calculateRPSResult(Shape.Rock, Shape.Paper);
    expect(result).toBe(Result.Lose);
  });

  it('return tie result', () => {
    const result: Result = calculateRPSResult(Shape.Rock, Shape.Rock);
    expect(result).toBe(Result.Tie);
  });
});

// TO-DO: add tests for ALL win, lose, tie scenarios
