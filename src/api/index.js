import * as reqwest from 'reqwest';

export function CreateOperation (libelle, montant, userid) {
    return reqwest({
        url: 'http://localhost:3001/api/operation', 
        method: 'post', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json'
        },
        data: {
            libelle: libelle, 
            montant: montant, 
            userid: userid
        }
    })
}