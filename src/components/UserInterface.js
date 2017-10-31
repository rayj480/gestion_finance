import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import SetOperation from './SetOperation';
import SetSalaire from './SetSalaire';

export default class UserInterface extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Opérations récurrentes"><SetOperation /></Tab>
                    <Tab eventKey={2} title="Déclaration salaire"><SetSalaire /></Tab>
                </Tabs>
            </div>
        )
    }
}