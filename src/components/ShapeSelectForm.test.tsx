import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ShapeSelectForm from './ShapeSelectForm';
import { Shape } from '../consts/types';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <ShapeSelectForm
      onSubmitShape={() => {}}
      onSelectShape={() => {}}
      selectedShape={Shape.Rock}
    />,
    div
  );
});
