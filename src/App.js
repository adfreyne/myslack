import React, { Component } from 'react';
import './App.css';
import LoginForm from './forms/LoginForm';
import NewChannelForm from './forms/NewChannelForm';
import UserProfileForm from './forms/UserProfileForm';
import Dashboard from './components/Dashboard';

class App extends Component {
    render () {
        return (
            <div>
                <Dashboard />
                <LoginForm />
                <NewChannelForm />
                <UserProfileForm />
            </div>
        );
    }
}

export default App;
