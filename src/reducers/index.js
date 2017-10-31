import {combineReducers} from 'redux';
import {findWhere, filter} from 'underscore';
import  * as ActionType from '../constants'
var uuidv4 = require('uuid/v4');

export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
      if (handlers.hasOwnProperty(action.type)) { // eslint-disable-line no-prototype-builtins
        return handlers[action.type](state, action);
      }
      return state;
    };
}


var list_users = [
    {
        id: 1,
        nom: 'CARI',
        prenom: 'Jonathan',
        salaire: 0
    },
    {
        id: 2,
        nom: 'GAILLARDON',
        prenom: 'Jeanne',
        salaire: 1000
    }
];


var initialState = {
    op_recurentes: [{
        id: uuidv4(),
        libelle: 'opération 1',
        montant: 200,
        userid: 1
    }, {
        id: uuidv4(),
        libelle: 'opération 2',
        montant: 200,
        userid: null
    }, {
        id: uuidv4(),
        libelle: 'opération 3',
        montant: 200,
        userid: 1
    }],
    users : list_users,
    current_user: null
}

var saveUserSalaire = (state, action) => {
    if(action.userid === state.id){
        return {
            ...state,
            salaire : action.montant
        }
    }else{
        return state;
    }
}

var saveSalaire = (state, action) => {
    return {
        ...state,
        users: state.users.map((u) => {
            return saveUserSalaire(u, action);
        }),
        current_user: {
            ...state.current_user,
            salaire: action.montant
        }
    };
}

var createOperation = (state, action) => {
    return {
        ...state,
        op_recurentes: [
            ...state.op_recurentes,
            {
                id: uuidv4(),
                libelle: action.libelle,
                montant: action.montant,
                userid: action.userid
            }
        ]
    }
}


var deleteOperation = (state, action) => {
    return {
        ...state,
        op_recurentes: filter(state.op_recurentes, (o) => {
            return o.id !== action.id
        })}
}

var setCurrentUser = (state, action) => {
    return {
        ...state,
        current_user: findWhere(state.users, {id: action.id})
    };
};


var appReducers = createReducer(initialState, {
    [ActionType.SET_CURRENT_USER]: setCurrentUser,
    [ActionType.CREATE_OPERATION]: createOperation,
    [ActionType.DELETE_OPERATION]: deleteOperation,
    [ActionType.SAVE_SALAIRE]: saveSalaire
})

// const gestionReducers = combineReducers(appReducers);

export default appReducers;