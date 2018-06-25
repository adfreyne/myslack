
const initialState = {
    firstname: 'Adri',
    lastname: 'De Freyne',
    residence: 'Roosdaal',
    age: '40',
    interests: ['flying'],
    channels: [],
    subscribedChannels: [],
    activeChannel: '',
    users: []

};
export const update = (firstname, lastname, residence, age, interests) => ({
    type: 'UPDATE',
    payload: { firstname, lastname, residence, age, interests }
});
export const profile = (state = initialState, action) => {
    if (action.type === 'UPDATE') {
        const { firstname, lastname, residence, age, interests } = action.payload;
        return {
            ...state,
            firstname: firstname,
            lastname: lastname,
            residence: residence,
            age: age,
            interests: interests
        };
    }
    return state;
};
