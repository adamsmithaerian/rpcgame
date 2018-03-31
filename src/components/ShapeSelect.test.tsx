import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import ShapeSelect from './ShapeSelect';
import { Shape } from '../consts/types';

describe('ShapeSelect component should', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
  
    ReactDOM.render(
      <ShapeSelect 
        onChange={() => {}}
        value={Shape.Rock}
      />,
      div
    );
  });

  it('match snapshot', () => {
    const tree = renderer
      .create(
        <ShapeSelect
          onChange={() => {}}
          value={Shape.Rock}
        />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });  
});

