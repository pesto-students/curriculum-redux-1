import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import groceryList from './redux/groceryList';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(groceryList);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
