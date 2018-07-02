import { push } from 'redux-first-routing';
import { loop, Cmd } from 'redux-loop';

const initialState = {
    activatedChannel: '',
    channels: []
};
export const init = (activatedChannel) => ({
    type: 'INIT', payload: activatedChannel
});
export const reducer = (state = initialState, action) => {
    if (action.type === 'INIT') {
        const newState = {
            activatedChannel: action.payload,
            channels: [...state.channels, action.payload]
        };
        return loop(
            newState,
            Cmd.action(push("/channels/" + action.payload + "/channels"))
        );
    }
    return state;
};
