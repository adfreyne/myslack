import { message/*, send/*, open, close*/ } from './websocket';
// import { loop, Cmd } from 'redux-loop';
// import { push } from 'redux-first-routing';

const initialState = {
    received: [],
    id: 0,
    name: '',
    ids: [],
    users: [],
    channels: []
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
            if (action.payload.command === "connect") {
                let cmd = "New connection: id: " + action.payload.id;
                let newConnectionId = action.payload.id;
                return {
                    ...state,
                    received: [...state.received, cmd],
                    ids: [...state.ids, newConnectionId]
                };
            }
            if (action.payload.command === 'name') {
                let cmd = action.payload.name + " came online.";
                return {
                    ...state,
                    received: [...state.received, cmd],
                    users: [...state.users, action.payload.name]
                };
            }
            if (action.payload.command === 'join') {
                let cmd = "Channel " + action.payload.channel + " added.";
                return {
                    ...state,
                    received: [...state.received, cmd],
                    channels: [...state.channels, action.payload.channel]
                };
            }
            if (action.payload.user && action.payload.message) {
                let cmd = action.payload.user + " sends : " + action.payload.message;
                return {
                    ...state,
                    received: [...state.received, cmd]
                };
            }
            if (action.payload.channel && action.payload.message) {
                let time = new Date().toLocaleTimeString();
                let mess = action.payload.channel + " : " +
                    action.payload.message + " from " + action.payload.id + " - " + time;
                return {
                    ...state,
                    received: [...state.received, mess]
                };
            }
            break;
        default:
            return state;
    }
    return state;
};
