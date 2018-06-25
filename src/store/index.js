
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing';
import { reducer as websocketReducer, middleware as websocketMiddleware } from './websocket';
import { reducer as messagesReducer } from './messages';
import { reducer as channelReducer } from './channels';
import { reducer as receivedReducer } from './receivedMessages';
import { reducer as usersOnlineReducer } from './usersOnline';
import { reducer as profileReducer } from './profile';
import thunk from 'redux-thunk';

const history = createBrowserHistory();

const rootReducer = combineReducers({
    profile: profileReducer,
    router: routerReducer,
    //form: formReducer,
    channels: channelReducer,
    websocket: websocketReducer,
    messages: messagesReducer,
    received: receivedReducer,
    users: usersOnlineReducer
});

const middleware = routerMiddleware(history);
const middlewareWebsocket = applyMiddleware(websocketMiddleware("ws://localhost:8085/api/stream"));

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(middleware), applyMiddleware(thunk), middlewareWebsocket
));

startListener(history, store);

export default store;
