import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'redux-first-routing';
import PropTypes from 'prop-types';

class Link extends Component {
    render () {
        const { dispatch, to, children } = this.props;

        return (
            <button className="pure-button" id={to} onClick={(event) => {
                event.preventDefault();
                dispatch(push(to));
            }}>
                {children}
            </button>
        );
    }
}
Link.propTypes = {
    dispatch: PropTypes.func,
    to: PropTypes.string,
    children: PropTypes.string
};
export default connect()(Link);
