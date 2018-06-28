import { message/*, send, open, close*/ } from './websocket';

const initialState = {
    channels: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case message:
            if (action.payload.command === 'join' && action.payload.channel !== null) {
                let cmd = action.payload.channel;
                if (state.channels.indexOf(action.payload.channel) === -1) {
                    return {
                        channels: [...state.channels, cmd]
                    };
                }
            }
            break;
        default:
            return state;
    }
    return state;
};
