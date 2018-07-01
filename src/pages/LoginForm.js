import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { push } from 'redux-first-routing';
import { send } from '../store/websocket';
import PropTypes from 'prop-types';

class Login extends PureComponent {
    constructor () {
        super();
        this.state = { firstname: '' };
    }
    render () {
        const { handleSubmit, connected } = this.props;
        return (
            <div >
                <form onSubmit={handleSubmit} className="pure-form">
                    <div>State your loginname:
                        <Field name="firstname" component="input" type="text" />
                        <button
                            className="pure-button pure-button-primary"
                            type="submit"
                            disabled={!connected}>
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
const onSubmit = ({ firstname }, dispatch) => {
    let sendToServer = JSON.stringify({ command: 'name', name: firstname });
    dispatch({ type: send, payload: sendToServer });
    dispatch(push("/dashboard"));
};
const mapStateToProps = (state) => ({
    firstname: state.profile.firstname,
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
