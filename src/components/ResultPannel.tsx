import * as React from 'react';

import { Result, Shape, resultNames, shapeNames } from '../consts/types';

interface ResultPannelProps {
  result: Result;
  computerShape: Shape;
  userShape: Shape;
  onResetGame: () => void;
}

class ResultPannel extends React.Component<ResultPannelProps, any> {
  render() {
    return (
      <div className="Result-pannel">
        <div className="text">You chose {shapeNames[this.props.userShape]}</div>
        <div className="text">Comptuer chose {shapeNames[this.props.computerShape]}</div>
        <div className="text">You {resultNames[this.props.result]}</div>
        <button type="button" onClick={this.props.onResetGame}>Play Again</button>
      </div>
    );
  }
}

export default ResultPannel;
