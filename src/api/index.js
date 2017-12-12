import * as reqwest from 'reqwest';

export var CreateOperation = (libelle, montant, userid, nextmonth) => {
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
            userid: userid, 
            nextmonth: nextmonth
        }
    })
}

export var GetOperation = () => {
    return reqwest({
        url: 'http://localhost:3001/api/operations', 
        method: 'get', 
        headers: {
            Accept: 'application/json'
        }
    });
};