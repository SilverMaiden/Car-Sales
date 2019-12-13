import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './store';
import {Provider} from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';

console.log(store.getState());
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , rootElement);
