import { message/*, send, open, close*/ } from './websocket';

const initialState = {
    users: []
};
export const reducer = (state = initialState, action) => {
    if (action.type === message) {
        if (action.payload.user) {
            let cmd = action.payload.user + " are online.";
            return { users: [...state.users, cmd] };
        } else {
            return state;
        }
    } return state;
};
