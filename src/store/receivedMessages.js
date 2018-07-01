import { message/*, send/*, open, close*/ } from './websocket';
// import { loop, Cmd } from 'redux-loop';
// import { push } from 'redux-first-routing';
const initialState = {
    received: [],
    id: 0,
    name: '',
    users: [],
    usernameIds: [],
    channels: [],
    selectedUser: '',
    selectedChannel: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case message:
            if (action.payload.error === true) {
                let cmd = "Error: " + action.payload.info;
                return {
                    ...state,
                    received: [...state.received, cmd]
                };
            }
            if (action.payload.command) {
                switch (action.payload.command) {
                    case 'connect':
                        let newId = "New connection: id: " + action.payload.id;
                        let usernameId = action.payload.id.toString();
                        return {
                            ...state,
                            received: [...state.received, newId],
                            usernameIds: [...state.usernameIds, usernameId]
                        };
                    case 'disconnect':
                        let disconnected = action.payload.id + " is disconnected.";
                        return {
                            ...state,
                            received: [...state.received, disconnected]
                        };
                    case 'name':
                        let timeUserOnline = new Date().toLocaleTimeString();
                        let newOnline = timeUserOnline + ": " + action.payload.name + " came online.";
                        return {
                            ...state,
                            received: [...state.received, newOnline],
                            users: [...state.users, action.payload.name]
                        };
                    case 'join':
                        let newChannel = "Channel " + action.payload.channel + " added.";
                        return {
                            ...state,
                            received: [...state.received, newChannel],
                            channels: [...state.channels, action.payload.channel]
                        };
                    case 'message':
                        let timeMessage = new Date().toLocaleTimeString();
                        let mess = action.payload.message + " from " + action.payload.id + " - " + timeMessage;
                        return {
                            ...state,
                            received: [...state.received, mess]
                        };
                    default:
                        return state;
                }
            }
            break;
        default:
            return state;
    }
    return state;
};
