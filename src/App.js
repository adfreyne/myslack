import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navigation from './navigation/Navigation';
import LoginForm from './pages/LoginForm';
import Dashboard from './pages/Dashboard';
import UserProfileForm from './pages/UserProfileForm';
import LoggedInMessage from './components/LoggedInMessage';
import ChannelPage from './pages/ChannelPage';
import PropTypes from 'prop-types';

const Login = () => <div><LoginForm /></div>;
const DashBoard = () => <div><Dashboard /></div>;
const UserProfile = () => <div><UserProfileForm /></div>;
const Channels = () => <div><ChannelPage /></div>;
const NotFound = () => <p>Error! 404</p>;

const routingTable = {
    '/': <Login />,
    '/dashboard': <DashBoard />,
    '/userprofile': <UserProfile />,
    '/channels': <Channels />
};

class App extends Component {
    render () {
        const { location } = this.props;//eslint-disable-line
        let page;
        const route = routingTable[location];
        if (!route) {
            page = <NotFound />;
        } else {
            page = route;
        }
        return (
            <div className="App">
                <Navigation id="navbar" />
                <LoggedInMessage />
                {page}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    location: state.router.pathname,
    firstname: state.profile.firstname,
    connected: state.messages.connected

});
App.propTypes = {
    connected: PropTypes.bool
};
export default connect(mapStateToProps)(App);
