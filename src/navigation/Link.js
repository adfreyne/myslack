import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'redux-first-routing';

class Link extends Component {
    render () {
        const { dispatch, to, children } = this.props;//eslint-disable-line

        return (
            <button id={to} onClick={(event) => {
                event.preventDefault();
                dispatch(push(to));
            }}>
                {children}
            </button>
        );
    }
}

export default connect()(Link);
