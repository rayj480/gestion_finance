import React from 'react'; 
import {Tabs, Tab} from 'react-bootstrap';
import {ListeOperations, Recap} from './containers';

export default class UserInterface extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Opérations récurrentes"><ListeOperations /></Tab>
                    <Tab eventKey={2} title="Déclaration salaire"><Recap /></Tab>
                </Tabs>
            </div>
        )
    }
}