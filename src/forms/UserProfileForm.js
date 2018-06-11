import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { update } from '../store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const data = {
    firstname: 'Adriaan',
    lastname: 'De Freyne',
    residence: 'Roosdaal',
    age: '41',
    interests: ['flying']
};
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
                    <div>Member since:</div>
                    <p />
                    <div>Active in channels:</div>
                </div>
            </div >
        );
    }
}
const onSubmit = ({ firstname, lastname, residence, age, interests }, dispatch) => {
    dispatch(
        update(firstname, lastname, residence, age, interests));
};
const mapStateToProps = (state) => ({
    initialValues: data
});
UserProfileForm.propTypes = {
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    residence: PropTypes.string,
    age: PropTypes.number
};
UserProfileForm = reduxForm({
    form: 'profile',
    onSubmit
})(UserProfileForm);

UserProfileForm = connect(mapStateToProps)(UserProfileForm);

export default UserProfileForm;
