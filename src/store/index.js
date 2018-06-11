
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing';
import { reducer as formReducer } from 'redux-form';

const initialState = {
    workspace: 'Intec Front-End',
    firstname: 'Adri',
    joined: 'June 11 2018',
    lastname: 'De Freyne',
    residence: 'Roosdaal',
    age: '40',
    interests: ['flying'],
    channels: [],
    subscribedChannels: [],
    activeChannel: '',
    users: []

};
export const update = (firstname, lastname, residence, age, interests) => ({
    type: 'UPDATE',
    payload: { firstname, lastname, residence, age, interests }
});
const profile = (state = initialState, action) => {
    if (action.type === 'UPDATE') {
        const { firstname, lastname, residence, age, interests } = action.payload;
        return {
            firstname: firstname,
            lastname: lastname,
            residence: residence,
            age: age,
            interests: interests

        };
    }
    return state;
};

const history = createBrowserHistory();

const rootReducer = combineReducers({
    reducer: profile,
    router: routerReducer,
    form: formReducer
});

const middleware = routerMiddleware(history);

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(middleware),
));

startListener(history, store);

export default store;
