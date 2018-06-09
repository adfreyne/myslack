import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends PureComponent {
    render () {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} id="loginform">
                <div>
                    <label>Username</label>
                    <div>
                        <Field
                            name="username"
                            component="input"
                            type="text"
                            size="10"
                        />
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <Field
                            name="password"
                            component="input"
                            type="password"
                            size="10"
                        />
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

export default reduxForm({
    form: 'login'
})(LoginForm);
