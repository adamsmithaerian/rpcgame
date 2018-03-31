import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import ResultPannel from './ResultPannel';
import { Shape, Result } from '../consts/types';

describe('ResultPannel component should', () => {
  it('render without crashing', () => {
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

  it('match snapshot', () => {
    const tree = renderer
      .create(
        <ResultPannel
          result={Result.Win}
          computerShape={Shape.Rock}
          userShape={Shape.Paper}
          onResetGame={() => {}}
      />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});