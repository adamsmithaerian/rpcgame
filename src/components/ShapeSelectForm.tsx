import * as React from 'react';
import ShapeSelect from './ShapeSelect';
import { Shape } from '../consts/types';

interface ShapeSelectProps {
  onSubmitShape: () => void;
  onSelectShape: (e: any) => void;
  selectedShape: Shape;
}

class ShapeSelectForm extends React.Component<ShapeSelectProps, any> {
  render() {
    return (
      <form onSubmit={this.props.onSubmitShape}>
        <label className="text">Please select your shape</label>

        <ShapeSelect
          onChange={this.props.onSelectShape}
          value={this.props.selectedShape}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ShapeSelectForm;
