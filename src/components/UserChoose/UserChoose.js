import React from 'react';
import './UserChoose.css';
import UserInterface from '../UserInterface';

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
                {this.props.current_user ? (<span>
                    Bonjour {this.props.current_user.prenom}
                    <UserInterface />
                </span>) : (
                    <div>
                        <ul className="users">
                        {this.props.users.map((u) => {
                            return (
                                <li onClick={() => this.selectUser(u.id)}>{u.nom + " " + u.prenom}</li>
                            )
                        })}
                        </ul>
                    </div>
                )}
            </div>
        )
    }
}