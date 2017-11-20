import * as ActionType from '../constants';
import * as API from '../api';


/// Action Creators

export var currentUser = (p_id) => ({
    type: ActionType.SET_CURRENT_USER,
    id: p_id
});

var createOperation = (p_libelle, p_montant, p_userid) => ({
    type: ActionType.CREATE_OPERATION,
    libelle: p_libelle,
    montant: p_montant,
    userid: p_userid
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

/// Thunks

export var t_createOperation = (libelle, montant, userid) => {
    
    return function (dispatch) {
        API.CreateOperation(libelle, montant, userid).then((data) => {
            dispatch(createOperation(libelle, montant, userid))
        })
    }
}