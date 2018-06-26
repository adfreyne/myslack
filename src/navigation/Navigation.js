import React from 'react';
import Link from './Link';

const Navigation = () => (
    <nav id="navbar" className="pure-menu pure-menu-horizontal">
        <Link className="pure-button pure-menu-item" to="/">Login</Link>
        <Link className="pure-button pure-menu-item" to="/dashboard">Slack dashboard</Link>
        <Link className="pure-button pure-menu-item" to="/channels">Channels</Link>
        <Link className="pure-button pure-menu-item" to="/userprofile">User Profile</Link>
    </nav>
);

export default Navigation;
