import * as React from 'react';
import ShapeSelectForm from './ShapeSelectForm';
import ResultPannel from './ResultPannel';
import { Shape, Result } from '../consts/types';

import './App.css';

interface AppProps {
  computer: {
    selectedShape: Shape;
  };
  user: {
    selectedShape: Shape;
  };
  onSelectShape: () => void;
  onSubmitShape: () => void;
  onResetGame: () => void;
  showResult: boolean;
  result: Result;
}

class App extends React.Component<AppProps, any> {
  renderContent() {
    if (!this.props.showResult) {
      return (
        <ShapeSelectForm
          onSelectShape={this.props.onSelectShape}
          onSubmitShape={this.props.onSubmitShape}
          selectedShape={this.props.user.selectedShape}
        />        
      );
    } else {
      return (
        <ResultPannel
          result={this.props.result}
          userShape={this.props.user.selectedShape}
          computerShape={this.props.computer.selectedShape}
          onResetGame={this.props.onResetGame}
        />
      );
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Rock Paper Scissors
          </h1>
        </header>
        <div className="App-intro">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default App;
