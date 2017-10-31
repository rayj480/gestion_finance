import { connect } from 'react-redux';
import ListUsers from './ListUsers';
import { currentUser } from '../../actions';

export default connect((state) => {
  return {
      users: state.users,
      current_user: state.current_user
  }
}, (dispatch) => {
  return {
      setUser: (id) => {
          dispatch(currentUser(id));
      }
  }
})(ListUsers);