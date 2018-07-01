import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { update } from '../store/profile';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class UserProfileForm extends PureComponent {
    render () {
        const { handleSubmit } = this.props;
        return (

            <div className="pure-u-3-8" >
                <form className="pure-form" onSubmit={handleSubmit}>
                    <div><h3>Update your profile ?</h3></div>
                    <div className="pure-control-group">
                        <label>First Name: </label>
                        <div>
                            <Field name="firstname" component="input" type="text" />
                        </div>
                    </div>
                    <div className="pure-control-group">
                        <label>Last Name</label>
                        <div>
                            <Field name="lastname" component="input" type="text" />
                        </div>
                    </div>
                    <div className="pure-control-group">
                        <label>Residence</label>
                        <div>
                            <Field name="residence" component="input" type="text" />
                        </div>
                    </div>
                    <div className="pure-control-group">
                        <label>Age</label>
                        <div>
                            <Field name="age" component="input" type="number" />
                        </div>
                    </div>
                    <div className="pure-control-group">
                        <label>Interests</label>
                        <div>
                            <Field name="interests" component="input" type="text" />
                        </div>
                    </div>
                    <div className="pure-control-group">
                        <button className="pure-button pure-button-primary" type="submit" >
                            Submit changes
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
const onSubmit = ({ firstname, lastname, residence, age, interests }, dispatch) => {
    dispatch(
        update(firstname, lastname, residence, age, interests));
};
const mapStateToProps = (state) => ({
    initialValues: state.profile,
    firstname: state.profile.firstname,
    lastname: state.profile.lastname,
    residence: state.profile.residence,
    age: state.profile.age,
    interests: state.profile.interests
});
UserProfileForm.propTypes = {
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    residence: PropTypes.string,
    age: PropTypes.string,
    interests: PropTypes.array,
    handleSubmit: PropTypes.func
};
UserProfileForm = reduxForm({
    form: 'profile',
    onSubmit
})(UserProfileForm);

UserProfileForm = connect(mapStateToProps)(UserProfileForm);

export default UserProfileForm;

