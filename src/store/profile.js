
const initialState = {
    workspace: 'Intec Front-End',
    firstname: 'Adri',
    password: 'password',
    joined: 'June 11 2018',
    lastname: 'De Freyne',
    residence: 'Roosdaal',
    age: '40',
    interests: ['coding', 'reading'],
    channels: [],
    subscribedChannels: [],
    activeChannel: '',
    users: [],
    messages: [],
    connected: false,
    loggedOn: false,
    receivedMessages: []

};
export const update = (firstname, lastname, residence, age, interests) => ({
    type: 'UPDATE',
    payload: { firstname, lastname, residence, age, interests }
});

export const reducer = (state = initialState, action) => {
    if (action.type === 'UPDATE') {
        const { firstname, lastname, residence, age, interests, users } = action.payload;
        return {
            firstname: firstname,
            lastname: lastname,
            residence: residence,
            age: age,
            interests: interests,
            users: users

        };
    }
    return state;
};
