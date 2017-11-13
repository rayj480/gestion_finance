import { connect } from 'react-redux';
import Operations from './Operations';
import { deleteOperation } from '../../actions';


export default connect((state) => {
  return {
      operations: state.op_recurentes,
      users: state.users
  }
}, (dispatch) => {
  return {
      deleteOp: (id) => {
          dispatch(deleteOperation(id));
      }
  }
})(Operations)