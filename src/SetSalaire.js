import React from 'react'; 
import {Table} from 'react-bootstrap';
import {reduce, max} from 'underscore';

export default class SetSalaire extends React.Component{
    constructor(props){
        super(props);
    }

    saveSalaire(e){
        e.preventDefault();
        this.props.saveSalaire(this.props.user.id, Number.parseInt(this.salaire.value));
    }

    render(){
        var chargeTotale = reduce(this.props.op, (memo, o) => (memo + o.montant), 0); 
        var users = this.props.users.map((u) => {
            return u.salaire >= chargeTotale ? { ...u, salaire:chargeTotale} : u
        });
        var maxSalaire = (max(users, (u) => (u.salaire))).salaire; 
        var pourcentageMax = maxSalaire*100/reduce(users, (memo, u) => (memo + u.salaire), 0);
        var montantMin = chargeTotale-(pourcentageMax*chargeTotale/100);
        var montantMax = chargeTotale-montantMin;
        var op_totale = reduce(this.props.operations, (memo, o) => (memo + o.montant), 0);
        console.log(chargeTotale)
        console.log(maxSalaire)
        console.log(pourcentageMax)
        console.log(montantMin)
        console.log(montantMax)
        var montant = this.props.user.salaire < maxSalaire ? montantMin : montantMax;
        return (
            <div>
                A payer : {montant - op_totale}
                <form>
                    <label htmlFor="salaire"></label> <input ref={(input) => this.salaire = input} id="salaire" type="text"/>
                    <button onClick={this.saveSalaire.bind(this)}>Valider</button>
                </form>
                <Table>
                    <thead>
                        <tr>
                            <td>Libellé</td>
                            <td>Montant</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.operations.map((o) => {
                                return <tr><td>{o.libelle}</td><td>{o.montant}</td></tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}