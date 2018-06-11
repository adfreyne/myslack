import React from 'react';
import Link from './Link';

const Navigation = () => (
    <nav id="navbar">
        <Link className="link" to="/">Login</Link>
        <Link className="link" to="/dashboard">Slack dashboard</Link>
        <Link className="link" to="/userprofile">User Profile</Link>
        <Link className="link" to="/newchannel">Create a new channel</Link>
    </nav>
);

export default Navigation;
