import { message, send, open, close } from './websocket';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case send:
            return { state };
        default:
            return state;
    }
};
