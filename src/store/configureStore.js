import { createStore } from 'redux';
import specReducer from '../reducers/specReducer.js';

// reducer function will look at the dispatched action and 
// return the computed next state.
const configureStore = () => {
    const store = createStore(specReducer);
    return store;

};

export default configureStore;
