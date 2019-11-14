import { createStore } from "redux"
import testReducer from './../testArea/testReducer';

export const configureStore = () =>{
    const store = createStore(testReducer);
    return store;
}