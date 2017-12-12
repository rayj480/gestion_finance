import * as ActionType from '../constants';
import * as API from '../api';


/// Action Creators

export var currentUser = (p_id) => ({
    type: ActionType.SET_CURRENT_USER,
    id: p_id
});

var createOperation = (p_libelle, p_montant, p_userid, p_nextmonth) => ({
    type: ActionType.CREATE_OPERATION,
    libelle: p_libelle,
    montant: p_montant,
    userid: p_userid, 
    nextmonth: p_nextmonth
})


export var deleteOperation = (p_id) => ({
    type: ActionType.DELETE_OPERATION,
    id: p_id
})

export var saveSalaire = (p_userid, p_montant) => {
    return {
        type: ActionType.SAVE_SALAIRE,
        userid: p_userid,
        montant: p_montant
    }
}

var fetchOperation = (data) => {
    return {
        type: ActionType.FETCH_OPERATIONS, 
        operations: data
    }
}

/// Thunks

export var t_createOperation = (libelle, montant, userid, nextmonth) => {
    
    return function (dispatch) {
        API.CreateOperation(libelle, montant, userid, nextmonth).then((data) => {
            dispatch(createOperation(libelle, montant, userid, nextmonth))
        })
    }
}

export var t_fetchOperation = () => {
    return (dispatch) => {
        API.GetOperation().then((data) => {
            console.log(data);
            dispatch(fetchOperation(data));
        })
    }
}

