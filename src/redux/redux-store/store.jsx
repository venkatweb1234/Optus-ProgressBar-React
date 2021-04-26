import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../../root-reducer/root-reducer';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk,logger)));

export default store;
