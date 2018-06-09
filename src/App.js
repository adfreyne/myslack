import React, { Component } from 'react';
import './App.css';
import LoginForm from './forms/LoginForm';
import NewChannelForm from './forms/NewChannelForm';
import UserProfileForm from './forms/UserProfileForm';

class App extends Component {
    render () {
        return (
            <div>
                <LoginForm />
                <NewChannelForm />
                <UserProfileForm />
            </div>
        );
    }
}

export default App;
