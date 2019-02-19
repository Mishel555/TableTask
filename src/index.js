import React from 'react';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store, { history } from './store/Index';
import './assets/scss/main.scss';
import { Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './containers/App';


const target = document.querySelector('#root')

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
  </Provider>,
  target
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
