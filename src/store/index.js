
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing';

const initialState = {
    users: ['Adri']
};

const reducer = (state = initialState, action) => {
    return state;
};

const history = createBrowserHistory();

const rootReducer = combineReducers({
    reducer: reducer,
    router: routerReducer
});

const middleware = routerMiddleware(history);

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(middleware),
));

startListener(history, store);

export default store;
