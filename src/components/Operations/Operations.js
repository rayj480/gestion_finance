import React from 'react';
import {reduce} from 'underscore';
import {Table} from 'react-bootstrap';
import {GetOperation} from '../../api';


/// Thunks 


export default class SetOperation extends React.Component{


    constructor(props){
        super(props); 
        this.props.fetchOperation();
    }

    saveOperation(e){
        e.preventDefault();
        // this.props.createOp(this.libelle.value, Number.parseInt(this.montant.value), this.userid.value);
        this.props.createOperation(this.libelle.value, Number.parseInt(this.montant.value), this.userid.value);
    }

    delOperation(id){
        this.props.deleteOp(id);
    }



    render(){
        return (
            <div>
                <form>
                    <label for="op_libelle">Libellé</label><input ref={(input) => this.libelle = input} id="op_libelle" type="text" />
                    <label for="op_montant">Montant</label><input ref={(input) => this.montant = input} id="op_montant" type="text" />
                    <select ref={(input) => this.userid = input}>
                        <option value=""></option>
                        {this.props.users.map((u) => {
                            return <option value={u.id}>{u.nom + " " + u.prenom}</option>
                        })}
                    </select>
                    <button onClick={this.saveOperation.bind(this)}>Ajouter</button>
                </form>
                <Table striped bordered condensed hover>
                    <thead><tr><th>Libellé</th><th>Montant</th><th>Actions</th></tr></thead>
                    { console.log(this.props.operations) }
                    {this.props.operations ? this.props.operations.map((o) => {
                        return <tr><td>{o.libelle}</td><td>{o.montant} €</td><td><span onClick={(id) => {this.props.deleteOp(o.id)}}>Supprimer</span></td></tr>
                    }) : ""}
                </Table>
                <div>Charges totale du ménage : { reduce(this.props.operations, (memo, o) => (memo + o.montant), 0) } €</div>
            </div>
        )
    }
}