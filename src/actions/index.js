

export var currentUser = (p_id) => ({
    type: 'SET_CURRENT_USER',
    id: p_id
}); 

export var createOperation = (p_libelle, p_montant, p_userid) => ({
    type: 'CREATE_OPERATION', 
    libelle: p_libelle, 
    montant: p_montant, 
    userid: p_userid
})


export var deleteOperation = (p_id) => ({
    type: 'DELETE_OPERATION', 
    id: p_id
})

export var saveSalaire = (p_userid, p_montant) => {
    return {
        type: 'SAVE_SALAIRE', 
        userid: p_userid,
        montant: p_montant
    }
}