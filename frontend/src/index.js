import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from "react-router";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from './App';
import thunk from "redux-thunk";
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import PasswordContainer from './containers/PasswordContainer';
import password from './reducers/password';
import { composeWithDevTools } from 'redux-devtools-extension';


//injectTapEventPlugin();
const store = createStore(password, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PasswordContainer} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
