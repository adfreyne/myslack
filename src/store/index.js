
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing';
import { reducer as formReducer } from 'redux-form';
import { reducer as websocketReducer, middleware as websocketMiddleware } from './websocket';
import { reducer as messagesReducer } from './messages';
import { reducer as channelReducer } from './makeChannel';
import { reducer as receivedReducer } from './receivedMessages';

const initialState = {
    workspace: 'Intec Front-End',
    firstname: 'Adri',
    password: 'password',
    joined: 'June 11 2018',
    lastname: 'De Freyne',
    residence: 'Roosdaal',
    age: '40',
    interests: ['coding', 'reading'],
    channels: [],
    subscribedChannels: [],
    activeChannel: '',
    users: ['Adri'],
    messages: [],
    connected: false,
    loggedOn: false,
    receivedMessages: []

};
export const update = (firstname, lastname, residence, age, interests) => ({
    type: 'UPDATE',
    payload: { firstname, lastname, residence, age, interests }
});

const profile = (state = initialState, action) => {
    if (action.type === 'UPDATE') {
        const { firstname, lastname, residence, age, interests, users } = action.payload;
        return {
            firstname: firstname,
            lastname: lastname,
            residence: residence,
            age: age,
            interests: interests,
            users: [...state.users, firstname]
        };
    }
    return state;
};

const history = createBrowserHistory();

const rootReducer = combineReducers({
    reducer: profile,
    router: routerReducer,
    form: formReducer,
    // chat: chat,
    channel: channelReducer,
    websocket: websocketReducer,
    messages: messagesReducer,
    received: receivedReducer
});

const middleware = routerMiddleware(history);
const middlewareWebsocket = applyMiddleware(websocketMiddleware("ws://localhost:8085/api/stream"));

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(middleware), middlewareWebsocket
));

startListener(history, store);

export default store;
