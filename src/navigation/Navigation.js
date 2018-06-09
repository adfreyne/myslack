import React from 'react';
import Link from './Link';

const Navigation = () => (
    <nav id="navbar">
        <Link to="/">Login</Link>
        <Link to="/dashboard">Slack dashboard</Link>
        <Link to="/userprofile">User Profile</Link>
        <Link to="/newchannel">Create a new channel</Link>
        <Link to="/error">Error</Link>
    </nav>
);

export default Navigation;
