const initialState = {
    channels: [],
    channel: ''
};
export const makeChannel = (channel) => ({
    type: 'MAKE_CHANNEL',
    payload: { channel }
});
export const reducer = (state = initialState, action) => {
    if (action.type === 'MAKE_CHANNEL') {
        const { channel } = action.payload;
        return {
            channels: [...state.channels, channel],
            channel: channel
        };
    }
    return state;
};
