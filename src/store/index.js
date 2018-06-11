
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing';
import { reducer as formReducer } from 'redux-form';

const initialState = {
    firstname: 'Adri',
    lastname: '',
    residence: '',
    age: '',
    interests: [],
    channels: [],
    activeChannel: '',
    users: []

};

const reducer = (state = initialState, action) => {
    return state;
};

const history = createBrowserHistory();

const rootReducer = combineReducers({
    reducer: reducer,
    router: routerReducer,
    form: formReducer
});

const middleware = routerMiddleware(history);

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(middleware),
));

startListener(history, store);

export default store;
