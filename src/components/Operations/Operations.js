import React from 'react';
import {reduce} from 'underscore';
import {Table} from 'react-bootstrap';
import {GetOperation} from '../../api';
import {findWhere} from 'underscore';
import { isBoolean } from 'util';


/// Thunks 


export default class SetOperation extends React.Component{


    constructor(props){
        super(props); 
        this.props.fetchOperation();
    }

    saveOperation(e){
        e.preventDefault();
        // this.props.createOp(this.libelle.value, Number.parseInt(this.montant.value), this.userid.value);
        this.props.createOperation(this.libelle.value, Number.parseInt(this.montant.value), this.userid.value, this.nextmonth.checked.toString());
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
                    <label for="op_nextmonth">Pour le mois prochain</label><input ref={(input) => this.nextmonth = input} id="op_nextmonth" type="checkbox" />
                    <button onClick={this.saveOperation.bind(this)}>Ajouter</button>
                </form>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Libellé</th>
                            <th>Montant</th>
                            <th>Qui ?</th>
                            <th>Pour le mois prochain</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    { console.log(this.props.users) }
                    {this.props.operations ? this.props.operations.map((o) => {
                        return <tr>
                                    <td>{o.libelle}</td>
                                    <td>{o.montant} €</td>
                                    <td>{ o.userid || o.userid !== '' === 0 ? (findWhere(this.props.users, {id: Number.parseInt(o.userid)}).prenom + ' ' + findWhere(this.props.users, {id: Number.parseInt(o.userid)}).nom) : '' }</td>
                                    <td>{o.nextmonth === "true" ? 'oui' : 'non'}</td>
                                    <td><span onClick={(id) => {this.props.deleteOp(o.id)}}>Supprimer</span></td>
                                </tr>
                    }) : ""}
                </Table>
                <div>Charges totale du ménage : { reduce(this.props.operations, (memo, o) => (memo + Number.parseInt(o.montant)), 0) } €</div>
            </div>
        )
    }
}