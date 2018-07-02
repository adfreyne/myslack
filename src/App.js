import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navigation from './navigation/Navigation';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import UserProfilePage from './pages/UserProfilePage';
import LoggedInMessage from './components/LoggedInMessage';
import ChannelPage from './pages/ChannelPage';
import PropTypes from 'prop-types';
import Router from './navigation/Router';

const Login = () => <div><LoginPage /></div>;
const DashBoard = () => <div><Dashboard /></div>;
const UserProfile = () => <div><UserProfilePage /></div>;
const Channels = () => <div><ChannelPage /></div>;
const NotFound = () => <p>Error! 404</p>;
// const toUserMessage = (props) => {
//     return <p>This is a toUserMessage page for {props.channelId}.</p>;
// };
// const toChannelMessage = ({ channelId }) =>
//     (<div><p>This is an toChannelMessage page for {channelId}.</p>
//         <ChannelPage /></div>);

class App extends Component {
    render () {
        return (
            <div className="App">
                <Navigation id="navbar" />
                <LoggedInMessage />
                <Router routes={{
                    '/': Login,
                    '/dashboard': DashBoard,
                    '/userprofile': UserProfile,
                    '/channels': Channels,
                    // '/channels/:channelId/toUserMessage': toUserMessage,
                    // '/channels/:channelId/toChannelMessage': toChannelMessage,
                    'error': NotFound
                }} />
                <hr />
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
