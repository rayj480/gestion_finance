import reqwest from 'reqwest';

export function CreateOperation (libelle, montant, userid) {
    return request({
        url: 'http://localhost:3001/api/operations', 
        method: 'post', 
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            libelle: libelle, 
            montant: montant, 
            userid: userid
        }
    })
}