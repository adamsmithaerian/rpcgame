import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ShapeSelect from './ShapeSelect';
import { Shape } from '../consts/types';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <ShapeSelect
      onChange={() => {}}
      value={Shape.Rock}
    />,
    div
  );
});