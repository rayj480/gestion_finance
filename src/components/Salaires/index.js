import { connect } from 'react-redux';
import { filter } from 'underscore';
import Salaires from './Salaires';
import { saveSalaire } from '../../actions';

export default connect((state) => {
  return {
      users: state.users,
      user: state.current_user,
      op: state.op_recurentes,
      operations: filter(state.op_recurentes, (o) => {
          return o.userid === state.current_user.id
      })
  }
}, (dispatch) => {
  return {
      saveSalaire: (userid, montant) => {
          dispatch(saveSalaire(userid, montant))
      }
  }
})(Salaires)