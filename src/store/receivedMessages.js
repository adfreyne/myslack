import { message/*, send, open, close*/ } from './websocket';

const initialState = {
    received: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case open:
        //     return { log: [...state.log, "websocket connected"] };
        // case send:
        //     return { log: [...state.log, "sent: " + action.payload] };
        case message:
            if (action.payload.command === 'name') {
                let cmd = action.payload.name + " is online.";
                return { received: [...state.received, cmd] };
            }
            if (action.payload.user && action.payload.message) {
                let cmd = action.payload.user + " sends : " + action.payload.message;
                return { received: [...state.received, cmd] };
            }
            if (action.payload.channel && action.payload.message) {
                let cmd = "Message on channel " + action.payload.channel + " : " + action.payload.message;
                return { received: [...state.received, cmd] };
            }
        // let incoming = JSON.stringify(action.payload);
        // case close:
        //     return { log: [...state.log, "websocket disconnected"] };
        default:
            return state;
    }
};
