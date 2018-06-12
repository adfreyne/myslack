export const send = (message) => ({
    type: 'SEND',
    payload: { message }
});

const reducer = (state = [], action) => {
    if (action.type === 'SEND') {
        const { message } = action.payload;
        return {
            messages: [...state.messages, message]
        };
    }
    return state;
};
export default reducer;
