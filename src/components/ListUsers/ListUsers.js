import React from 'react';
import './ListUsers.css';

export default class UserChoose extends React.Component{


    constructor (props){
        super(props);
    }

    selectUser(id){
        this.props.setUser(id);
    }

    render(){
        return (
            <div>
                <ul className="users">
                    {this.props.users.map((u) => {
                        return (
                            <li onClick={() => this.selectUser(u.id)}>{u.nom + " " + u.prenom}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}