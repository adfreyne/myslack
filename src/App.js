import React, { Component } from 'react';
import './App.css';
import LoginForm from './forms/LoginForm';
import NewChannelForm from './forms/NewChannelForm';

class App extends Component {
    render () {
        return (
            <div>
                <LoginForm />
                <NewChannelForm />
            </div>
        );
    }
}

export default App;
