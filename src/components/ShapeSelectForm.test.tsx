import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import ShapeSelectForm from './ShapeSelectForm';
import { Shape } from '../consts/types';

describe('ShapeSelectForm component should', () => {
  it('render without crashing', () => {
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

  it('match snapshot', () => {
    const tree = renderer
      .create(
        <ShapeSelectForm
          onSubmitShape={() => {}}
          onSelectShape={() => {}}
          selectedShape={Shape.Rock}
        />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });   
});
