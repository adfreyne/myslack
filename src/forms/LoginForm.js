import React, { PureComponent } from 'react';
//import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
//import { update } from '../store';
import { push } from 'redux-first-routing';

class Login extends PureComponent {
    constructor () {
        super();
        this.state = { firstname: '' };
    }
    render () {
        const { dispatch } = this.props;
        let sendPayload = "{ \"command\": \"name\", \"name\": \"Adriaan\" }";
        return (
            <div >
                <button id="loginButton" onClick=
                    {() => {
                        dispatch({ type: 'WEBSOCKET_SEND', payload: sendPayload });
                        dispatch(push("/dashboard"));
                        // if (connected && firstname === 'Adri') { this.disabled = true; }
                    }}
                >
                    Connect to back-end chat-box as Adriaan
                </button>
                {/* <form onSubmit={handleSubmit} id="loginform">
                    <div>
                        <label>Firstname</label>
                        <div>
                            <Field name="firstname" component="input" type="text" size="10" value="" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" disabled="true" >
                            Login
                        </button>
                    </div>
                    <div id="forgot">Forgot firstname/password</div>
                </form>
            </div>
        );
    }
}
const onSubmit = ({ firstname }, dispatch) => {
    dispatch(
        update(firstname));
};
const mapStateToProps = (state) => ({
    firstname: state.reducer.firstname
}); */}</div>
        );
    }
}
export default connect()(Login);
