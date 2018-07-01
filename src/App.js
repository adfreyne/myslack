import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navigation from './navigation/Navigation';
import LoginForm from './pages/LoginForm';
import Dashboard from './pages/Dashboard';
import UserProfilePage from './pages/UserProfilePage';
import LoggedInMessage from './components/LoggedInMessage';
import ChannelPage from './pages/ChannelPage';
import PropTypes from 'prop-types';

const LoginPage = () => <div><LoginForm /></div>;
const DashBoard = () => <div><Dashboard /></div>;
const UserProfile = () => <div><UserProfilePage /></div>;
const Channels = () => <div><ChannelPage /></div>;
const NotFound = () => <p>Error! 404</p>;

const routingTable = {
    '/': <LoginPage />,
    '/dashboard': <DashBoard />,
    '/userprofile': <UserProfile />,
    '/channels': <Channels />
};

class App extends Component {
    render () {
        const { location } = this.props;
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
    connected: PropTypes.bool,
    location: PropTypes.string
};
export default connect(mapStateToProps)(App);
