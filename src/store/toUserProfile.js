import { push } from 'redux-first-routing';
import { loop, Cmd } from 'redux-loop';

const initialState = {
    activatedUser: '',
    users: []
};
export const init = (activatedUser) => ({
    type: 'TO_USER_PROFILE', payload: activatedUser
});

export const reducer = (state = initialState, action) => {
    if (action.type === 'TO_USER_PROFILE') {
        const newState = {
            activatedUser: action.payload,
            users: [...state.users, action.payload]
        };
        return loop(
            newState,
            Cmd.action(push("/userprofile"))
        );
    }
    return state;
};
