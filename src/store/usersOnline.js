import { message/*, send, open, close*/ } from './websocket';

const initialState = {
    users: []
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case message:
            if (action.payload.user) {
                let cmd = action.payload.user + " are online.";
                return { users: [...state.users, cmd] };
            }
        default:
            return state;
    }
};
