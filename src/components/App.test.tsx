import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import App from './App';
import { Shape, Result } from '../consts/types';

describe('App component should', () => {
  it('render without crashing using ReactDOM', () => {
    const div = document.createElement('div');
    
    ReactDOM.render(
      <App
        computer={{
          selectedShape: Shape.Rock
        }}
        user={{
          selectedShape: Shape.Rock
        }}
        onSelectShape={() => {}}
        onSubmitShape={() => {}}
        onResetGame={() => {}}
        showResult={false}
        result={Result.Win}
      />,
      div
    );
  });
  
  it('match snapshot', () => {
    const tree = renderer
      .create(
        <App
        computer={{
          selectedShape: Shape.Rock
        }}
        user={{
          selectedShape: Shape.Rock
        }}
        onSelectShape={() => {}}
        onSubmitShape={() => {}}
        onResetGame={() => {}}
        showResult={false}
        result={Result.Win}
      />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
