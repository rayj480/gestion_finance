import { connect } from 'react-redux';
import Operations from './Operations';
import {t_createOperation } from '../../actions';
import { bindActionCreators } from 'redux';


export default connect((state) => {
  return {
      operations: state.op_recurentes,
      users: state.users
  }
}, (dispatch) => {
  return {
      createOperation: bindActionCreators(t_createOperation, dispatch)
  }
})(Operations)