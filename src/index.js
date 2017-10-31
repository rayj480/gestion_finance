import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import gestionReducers from './reducers';
import {createStore} from 'redux';
import { Provider} from 'react-redux';

let store = createStore(gestionReducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
