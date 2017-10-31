import { connect } from 'react-redux';
import Operations from './Operations';
import { createOperation, deleteOperation } from '../../actions';

export default connect((state) => {
  return {
      operations: state.op_recurentes,
      users: state.users
  }
}, (dispatch) => {
  return {
      createOp: (libelle, montant, userid) => {
          dispatch(createOperation(libelle, montant, userid))
      },
      deleteOp: (id) => {
          dispatch(deleteOperation(id));
      }
  }
})(Operations)