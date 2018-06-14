import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { update } from '../store';

class LoginForm extends PureComponent {
    render () {
        const { handleSubmit, username, password } = this.props;
        return (
            <form onSubmit={handleSubmit} id="loginform">
                <div>
                    <label>Username</label>
                    <div>
                        <Field name="username" component="input" type="text" size="10" />
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <Field name="password" component="input" type="password" size="10" />
                    </div>
                </div>
                <div>
                    <button type="submit" >
                        Login
                    </button>
                </div>
                <div id="forgot">Forgot username/password</div>
            </form>
        );
    }
}
const onSubmit = ({ username, password }, dispatch) => {
    dispatch(
        update(username, password));
};
const mapStateToProps = (state) => ({
    username: state.reducer.username,
    password: state.reducer.password
});
LoginForm = connect(mapStateToProps)(LoginForm);
export default reduxForm({
    form: 'login',
    onSubmit
})(LoginForm);
