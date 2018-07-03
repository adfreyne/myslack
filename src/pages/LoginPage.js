import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { push } from 'redux-first-routing';
import { send } from '../store/websocket';
import PropTypes from 'prop-types';

class LoginPage extends PureComponent {
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
                        <Field placeholder="a login is required" name="firstname" component="input" type="text" />
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

    if (firstname === 'Adri') {
        dispatch({ type: send, payload: sendToServer });
        dispatch(push("/dashboard"));
    }
};
const mapStateToProps = (state) => ({
    connected: state.websocket.connected
});
LoginPage.propTypes = {
    connected: PropTypes.bool,
    handleSubmit: PropTypes.func,
    firstname: PropTypes.string
};
LoginPage = reduxForm({
    form: 'login',
    onSubmit
})(LoginPage);

LoginPage = connect(mapStateToProps)(LoginPage);

export default LoginPage;
