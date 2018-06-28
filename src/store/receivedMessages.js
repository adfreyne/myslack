import { message/*, send, open, close*/ } from './websocket';

const initialState = {
    received: [],
    id: 0,
    name: '',
    ids: [],
    users: []
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
                    id: action.payload.id,
                    users: [...state.users, action.payload.name]
                };
            }
            if (action.payload.command === 'join') {
                let cmd = "Channel " + action.payload.channel + " added.";
                return {
                    ...state,
                    received: [...state.received, cmd],
                    id: action.payload.id,
                    users: [...state.users, action.payload.name]
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
                let cmd = "Message on channel " + action.payload.channel + " : " +
                    action.payload.message + " from " + action.payload.id;
                return {
                    ...state,
                    received: [...state.received, cmd]
                };
            }
            break;
        default:
            return state;
    }
    return state;
};
