import { message/*, send, open, close*/ } from './websocket';

const initialState = {
    users: []
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case message:
            if (action.payload.users) {
                let cmd = JSON.stringify(action.payload.users);
                return { users: [...state.users, cmd] };
            } else {
                return state;
            }
    } return state;
};
