import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserProfileForm from '../components/UserProfileForm';

class UserProfilePage extends PureComponent {
    render () {
        const { firstname, lastname, residence, age, interests } = this.props;
        let i = interests.toString();
        return (
            <div className="pure-g" id="userprofile">
                <div className="pure-u-1-4">
                    <img src="https://png.icons8.com/color/50/000000/magritte.png" alt="profile" width="200px" height="200px" />
                </div>
                <div className="pure-u-3-8" ><h3>About you:</h3>
                    <ul>
                        <li>{firstname} {lastname}, aged: {age}</li>
                        <li>You live in {residence}</li>
                        <li>Interests: {i}</li>
                    </ul>
                </div>
                <div className="pure-u-3-8" >
                    <UserProfileForm />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialValues: state.profile,
    firstname: state.profile.firstname,
    lastname: state.profile.lastname,
    residence: state.profile.residence,
    age: state.profile.age,
    interests: state.profile.interests
});
UserProfilePage.propTypes = {
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    residence: PropTypes.string,
    age: PropTypes.string,
    interests: PropTypes.array
};

UserProfilePage = connect(mapStateToProps)(UserProfilePage);

export default UserProfilePage;

