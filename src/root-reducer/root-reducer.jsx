import {combineReducers} from 'redux';
import fetchBarsReducer from '../redux/redux-reducers/fetch-progress-bar-reducers';
const rootReducer =combineReducers({
bars:fetchBarsReducer
})

export default rootReducer;