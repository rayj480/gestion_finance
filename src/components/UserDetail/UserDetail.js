import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Operations from '../Operations';
import Salaires from '../Salaires';

export default function UserInterface({user}) {
    return (
        <div>
            Bonjour {user.prenom}
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Opérations récurrentes"><Operations /></Tab>
                <Tab eventKey={2} title="Déclaration salaire"><Salaires /></Tab>
            </Tabs>
        </div>
    )
}