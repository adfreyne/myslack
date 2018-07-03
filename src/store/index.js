import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing';
import { reducer as websocketReducer, middleware as websocketMiddleware } from './websocket';
import { reducer as messagesReducer } from './messages';
import { reducer as channelReducer } from './channels';
import { reducer as receivedReducer } from './receivedMessages';
import { reducer as usersOnlineReducer } from './usersOnline';
import { reducer as formReducer } from 'redux-form';
import { profile as profileReducer } from './profile';
import { combineReducers, install } from 'redux-loop';
import { reducer as initChannelReducer } from './initChannel';
import { reducer as toUserProfileReducer } from './toUserProfile';

const history = createBrowserHistory();

const rootReducer = combineReducers({
    form: formReducer,
    profile: profileReducer,
    router: routerReducer,
    channels: channelReducer,
    websocket: websocketReducer,
    messages: messagesReducer,
    received: receivedReducer,
    users: usersOnlineReducer,
    initChannel: initChannelReducer,
    toUserProfile: toUserProfileReducer
});

const middlewareWebsocket = applyMiddleware(websocketMiddleware("ws://localhost:8085/api/stream"));

const store = createStore(rootReducer, composeWithDevTools(
    install(),
    applyMiddleware(routerMiddleware(history)),
    middlewareWebsocket
));

startListener(history, store);
export default store;
