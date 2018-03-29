import * as React from 'react';
import { Shape, shapeNames } from '../consts/types';

import './ShapeSelectForm.css';

interface SelectProps {
  onChange: (value: Shape) => void;
  value: Shape;
}

class ShapeSelect extends React.Component<SelectProps, any> {
  render() {
    return (
      <div className="Shape-select">
        <select
          onChange={(e: any) =>
            this.props.onChange(parseInt(e.target.value, 10))
          }
          value={this.props.value}
        >
          <option value={Shape.Rock}>{shapeNames[Shape.Rock]}</option>
          <option value={Shape.Paper}>{shapeNames[Shape.Paper]}</option>
          <option value={Shape.Scissors}>{shapeNames[Shape.Scissors]}</option>
        </select>
      </div>
    );
  }
}

export default ShapeSelect;
