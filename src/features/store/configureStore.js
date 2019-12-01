import { createStore } from "redux"
import testReducer from './../testArea/testReducer';
import {devToolsEnhancer} from 'redux-devtools-extension';
import rootReducer from './../../reducers/rootReducer';

export const configureStore = () =>{
    const store = createStore(rootReducer, devToolsEnhancer());
    return store;
}