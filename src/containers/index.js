import {connect} from 'react-redux'; 
import {currentUser, createOperation, deleteOperation, saveSalaire} from '../actions';
import UserChoose from '../UserChoose.js';
import SetOperation from '../SetOperation.js';
import SetSalaire from '../SetSalaire.js';
import {filter} from 'underscore';




export const ActiveUsers = connect((state) => {
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
})(UserChoose);

export const ListeOperations = connect((state) => {
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
})(SetOperation)

export const Recap = connect((state) => {
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
})(SetSalaire)


