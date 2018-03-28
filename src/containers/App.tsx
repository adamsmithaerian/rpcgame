import { connect } from 'react-redux';
import { setSelectShape, submitShape, resetGame } from '../actions';
import { Shape } from '../consts/types';

import App from '../components/App';

const mapStateToProps = (state: any) => ({
  computer: state.computer,
  user: state.user,
  result: state.app.result,
  showResult: state.app.showResult
});

const mapDispatchToProps = (dispatch: any) => ({
  onSelectShape: (shape: Shape) => dispatch(setSelectShape(shape)),
  onSubmitShape: () => dispatch(submitShape()),
  onResetGame: () => dispatch(resetGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
