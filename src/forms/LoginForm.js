import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { update } from '../store';

class LoginForm extends PureComponent {
    render () {
        const { handleSubmit, firstname, password } = this.props;
        return (
            <form onSubmit={handleSubmit} id="loginform">
                <div>
                    <label>Firstname</label>
                    <div>
                        <Field name="firstname" component="input" type="text" size="10" />
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <Field name="password" component="input" type="password" size="10" />
                    </div>
                </div>
                <div>
                    <button type="submit" disabled="true" >
                        Login
                    </button>
                </div>
                <div id="forgot">Forgot firstname/password</div>
            </form>
        );
    }
}
const onSubmit = ({ firstname, password }, dispatch) => {
    dispatch(
        update(firstname, password));
};
const mapStateToProps = (state) => ({
    firstname: state.reducer.firstname,
    password: state.reducer.password
});
LoginForm = connect(mapStateToProps)(LoginForm);
export default reduxForm({
    form: 'login',
    onSubmit
})(LoginForm);
