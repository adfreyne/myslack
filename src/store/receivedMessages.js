import { message/*, send, open, close*/ } from './websocket';

const initialState = {
    received: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case message:
            if (action.payload.command === 'name') {
                let cmd = action.payload.name + " is online.";
                return {
                    ...state,
                    received: [...state.received, cmd]
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
                let cmd = "Message on channel " + action.payload.channel + " : " + action.payload.message;
                return {
                    ...state,
                    received: [...state.received, cmd]
                };
            }

        default:
            return state;
    }
};
