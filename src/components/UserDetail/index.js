import { connect } from 'react-redux';
import UserDetail from './UserDetail';

export default connect((state) => {
  return {
      user: state.current_user,
  }
}, {})(UserDetail)