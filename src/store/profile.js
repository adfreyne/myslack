const initialState = {
    firstname: ''
};
export const update = (firstname) => ({
    type: 'UPDATE',
    payload: firstname
});
export const reducer = (state = initialState, action) => {
    if (action.type === 'UPDATE') {
        const { firstname } = action.payload;
        return {
            firstname: firstname
        };
    }
    return state;
};
