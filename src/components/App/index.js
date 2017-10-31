import { connect } from 'react-redux';
import App from './App';
import { currentUser } from '../../actions';

export default connect((state) => {
  return {
      current_user: state.current_user
  }
}, {})(App);