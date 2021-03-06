import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore,combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {searchRobots} from './reducers';
import { requestRobots } from './reducers';
import reportWebVitals from './reportWebVitals';
import tachyons from 'tachyons';
import App from './containers/App';

//redux middleware
const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots})

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} > 
      <App />
    </Provider> 
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
