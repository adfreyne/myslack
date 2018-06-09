import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';

class UserProfileForm extends PureComponent {
    render () {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <div>
                        <Field
                            name="firstname"
                            component="input"
                            type="text"
                        />
                    </div>
                </div>
                <div>
                    <label>Last Name</label>
                    <div>
                        <Field
                            name="lastname"
                            component="input"
                            type="text"
                        />
                    </div>
                </div>
                <div>
                    <label>Residence</label>
                    <div>
                        <Field
                            name="residence"
                            component="input"
                            type="text"
                        />
                    </div>
                </div>
                <div>
                    <label>Age</label>
                    <div>
                        <Field
                            name="age"
                            component="input"
                            type="number"
                        />
                    </div>
                </div>
                <div>
                    <label>Interests</label>
                    <div>
                        <Field
                            name="interests"
                            component="input"
                            type="text"
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
    form: 'profile'
})(UserProfileForm);
