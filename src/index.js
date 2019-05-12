import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';
import { Helmet } from "react-helmet";

const store = createStore(reducer);
ReactDOM.render(<Provider store={store}>
     <Helmet>
        <title>Billing Calculator</title>
        <meta name="description" content="A Billing Calculator to help you with your calculations of groceries and other stuff" />
        <meta name="keywords" content="billing-calculator,billing,grocery,calculator" />
      </Helmet>
<App />

</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
