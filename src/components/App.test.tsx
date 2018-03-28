import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Shape, Result } from '../consts/types';

it('renders without crashing', () => {
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
