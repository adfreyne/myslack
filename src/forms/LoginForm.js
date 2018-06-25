import React, { PureComponent } from 'react';
//import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
//import { update } from '../store';
import { push } from 'redux-first-routing';

class Login extends PureComponent {
    constructor () {
        super();
        this.state = { firstname: '' };
    }
    render () {
        const { dispatch } = this.props;
        let sendPayload = "{ \"command\":\"name\",\"name\":\"Adriaan\" }";
        let sendPayloadBis = "{ \"command\":\"name\",\"name\":\"" + this.state.firstname + "\" }";
        return (
            <div >
                <button onClick=
                    {() => {
                        dispatch({ type: 'WEBSOCKET_SEND', payload: sendPayload });
                        dispatch(push("/dashboard"));
                    }}
                >
                    Connect to back-end chat-box as Adriaan
                </button>
                <div>Log in as someone else. Name:
                    <textarea
                        value={this.state.firstname}
                        onChange={(f) => this.setState({ firstname: f.target.value })} />
                    <button
                        onClick={
                            () => {
                                dispatch({ type: 'WEBSOCKET_SEND', payload: sendPayloadBis });
                                dispatch(push("/dashboard"));
                            }}
                    >Log in</button>
                </div>
            </div>
        );
    }
}
export default connect()(Login);
