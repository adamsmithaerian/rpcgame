import { Shape, Result } from '../consts/types';

export const getRandomShape = (): Shape =>
  Math.floor(Math.random() * Math.floor(3));

export const calculateRPSResult = (user: Shape, computer: Shape): Result => {
  const resultGrid: Result[] = [
    Result.Tie,
    Result.Win,
    Result.Lose,
    Result.Lose,
    Result.Tie,
    Result.Win,
    Result.Win,
    Result.Lose,
    Result.Tie
  ];

  return resultGrid[computer * 3 + user];
};
