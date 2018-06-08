import { createStore } from 'redux';

const initialState = {
    users: ['Adri']
};

const reducer = (state, action) => {
    return state;
};

const store = createStore(reducer, initialState);

export default store;
