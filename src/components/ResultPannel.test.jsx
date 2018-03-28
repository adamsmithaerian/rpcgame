import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ResultPannel from './ResultPannel';
import { Shape, Result } from '../consts/types';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <ResultPannel
      result={Result.Win}
      computerShape={Shape.Rock}
      userShape={Shape.Paper}
      onResetGame={() => {}}
    />,
    div
  );
});