import {combineReducers} from 'redux';
import logReducer from './logReducer';
import techsReducer from "./techsReducer";

export default combineReducers({
    log: logReducer,
    techs: techsReducer
});