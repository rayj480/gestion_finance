import { connect } from 'react-redux';
import Operations from './Operations';
import {t_createOperation, t_fetchOperation } from '../../actions';
import { bindActionCreators } from 'redux';


export default connect((state) => {
  return {
      operations: state.operations,
      users: state.users
  }
}, (dispatch) => {
  return {
      createOperation: bindActionCreators(t_createOperation, dispatch), 
      fetchOperation: bindActionCreators(t_fetchOperation, dispatch)
  }
})(Operations)