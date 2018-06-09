import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navigation from './navigation/Navigation';
import LoginForm from './forms/LoginForm';
import Dashboard from './components/Dashboard';
import UserProfileForm from './forms/UserProfileForm';
import NewChannelForm from './forms/NewChannelForm';

const Login = () => <div><LoginForm /></div>;
const DashBoard = () => <div><Dashboard /></div>;
const UserProfile = () => <div><UserProfileForm /></div>;
const NewChannel = () => <div><NewChannelForm /></div>;
const NotFound = () => <p>Error! 404</p>;

const routingTable = {
    '/': <Login />,
    '/dashboard': <DashBoard />,
    '/userprofile': <UserProfile />,
    '/newchannel': <NewChannel />
};

class App extends Component {
    render () {
        const {
            location
        } = this.props;

        let page;
        const route = routingTable[location];
        if (!route) {
            page = <NotFound />;
        } else {
            page = route;
        }

        return (
            <div className="App">
                <Navigation />
                <hr />
                {page}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    location: state.router.pathname
});

export default connect(mapStateToProps)(App);
