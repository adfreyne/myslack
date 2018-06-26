import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { push } from 'redux-first-routing';
import PropTypes from 'prop-types';

class Login extends PureComponent {
    constructor () {
        super();
        this.state = { firstname: '' };
    }
    render () {
        const { handleSubmit, connected } = this.props;
        //let sendPayload = "{ \"command\":\"name\",\"name\":\"Adriaan\" }";
        return (
            <div >
                {/* <button onClick=
                    {() => {
                        dispatch({ type: 'WEBSOCKET_SEND', payload: sendPayload });
                        dispatch(push("/dashboard"));
                    }}
                disabled={!connected}
                >
                    Connect to back-end chat-box as Adriaan
                </button> */}
                <form onSubmit={handleSubmit}>
                    <div>State your loginname:
                        <Field name="firstname" component="input" type="text"
                            rows="1" cols="12" />
                        <button type="submit" disabled={!connected}>Log in</button>
                    </div>
                </form>
            </div>
        );
    }
}
const onSubmit = ({ firstname }, dispatch) => {
    let sendToServer = JSON.stringify({ command: 'name', name: firstname });
    dispatch({ type: 'WEBSOCKET_SEND', payload: sendToServer });
    dispatch(push("/dashboard"));
};
const mapStateToProps = (state) => ({
    firstname: state.reducer.firstname,
    connected: state.websocket.connected
});
Login.propTypes = {
    connected: PropTypes.bool,
    handleSubmit: PropTypes.func
};
Login = reduxForm({
    form: 'login',
    onSubmit
})(Login);

Login = connect(mapStateToProps)(Login);

export default Login;
