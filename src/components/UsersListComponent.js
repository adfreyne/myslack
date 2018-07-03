import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class UsersListComponent extends PureComponent {
    render () {
        const { users, dispatch } = this.props;
        let u = users.map((user, index) => (<li key={index}>
            <button className="pure-button" onClick={() => {
                dispatch({ type: 'TO_USER_PROFILE', payload: user });
            }}>{user}
            </button>
        </li >));
        return (
            <div className="pure-u-1-4" id="sidebar">
                <div>Users online:
                    <ul>
                        {u}
                    </ul>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    users: state.received.users
});
UsersListComponent.propTypes = {
    users: PropTypes.array,
    dispatch: PropTypes.func

};

export default connect(mapStateToProps)(UsersListComponent);
