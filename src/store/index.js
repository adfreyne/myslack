
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing';
import { reducer as formReducer } from 'redux-form';
import { reducer as websocketReducer, middleware as websocketMiddleware } from './websocket';
import { reducer as messagesReducer } from './messages';


const initialState = {
    workspace: 'Intec Front-End',
    firstname: 'Adri',
    joined: 'June 11 2018',
    lastname: 'De Freyne',
    residence: 'Roosdaal',
    age: '40',
    interests: ['running', 'coding'],
    channels: [],
    subscribedChannels: [],
    activeChannel: '',
    users: [],
    messages: []

};
export const send = (message) => ({
    type: 'SEND',
    payload: { message }
});

const chat = (state = initialState, action) => {
    if (action.type === 'SEND') {
        const { message } = action.payload;
        console.log('test'); //eslint-disable-line
        console.log(message);//eslint-disable-line
        console.log(state.messages);//eslint-disable-line
        return {
            messages: [...state.messages, message]
        };
    }
    return state;
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
    form: formReducer,
    chat: chat,
    websocket: websocketReducer,
    messages: messagesReducer
});

const middleware = routerMiddleware(history);
const middlewareWebsocket = applyMiddleware(websocketMiddleware("ws://localhost:8085/api/stream"));

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(middleware), middlewareWebsocket
));

startListener(history, store);

export default store;
