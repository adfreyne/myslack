import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { update } from '../store/profile';

class UserProfileForm extends PureComponent {
    render () {
        const { handleSubmit } = this.props;
        return (
            <div id="userprofile">
                <div>
                    <img src="https://png.icons8.com/color/50/000000/magritte.png" width="200px" height="200px" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name: </label>
                        <div>
                            <Field name="firstname" component="input" type="text" />
                        </div>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <div>
                            <Field name="lastname" component="input" type="text" />
                        </div>
                    </div>
                    <div>
                        <label>Residence</label>
                        <div>
                            <Field name="residence" component="input" type="text" />
                        </div>
                    </div>
                    <div>
                        <label>Age</label>
                        <div>
                            <Field name="age" component="input" type="number" />
                        </div>
                    </div>
                    <div>
                        <label>Interests</label>
                        <div>
                            <Field name="interests" component="input" type="text" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" >
                            Submit changes
                        </button>
                    </div>
                </form>
                <div>About you:
                    <p />
                    <div>Member since:</div>
                    <p />
                    <div>Active in channels:</div>
                </div>
            </div >
        );
    }
}
const onSubmit = ({ firstname }, dispatch) => {
    dispatch(
        update(firstname));
};
const mapStateToProps = (state, firstname) => {
    return { firstname: state.firstname };
};
export default reduxForm({
    form: 'profile',
    onSubmit,
    mapStateToProps
})(UserProfileForm);
