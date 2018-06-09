import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends PureComponent {
    render () {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <div>
                        <Field
                            name="username"
                            component="input"
                            type="text"
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
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" >
            Submit
                    </button>
                    <button type="button" >
            Clear Values
                    </button>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login'
})(LoginForm);
