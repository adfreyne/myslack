import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class MessageToUserForm extends PureComponent {
    constructor () {
        super();
        this.state = { user: '', message: '' };
    }
    render () {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Send to:</label>
                    <div>
                        <Field name="user" component="input" type="text" size="10" value="" />
                    </div>
                </div>
                <div>
                    <label>Message</label>
                    <div>
                        <Field name="textmessage" component="input" type="text" size="50" value="" />
                    </div>
                </div>
                <div>
                    <button type="submit" disabled="true" >
            Send
                    </button>
                </div>
            </form>
        );
    }
}
const onSubmit = ({ user, message }, dispatch) => {
    const json = "{\"command\": \"message\", \"user\":" + user + ", \"message\":" + message + "\}";
    dispatch({ type: 'WEBSOCKET_SEND' });
};
const mapStateToProps = (state) => ({
    firstname: state.reducer.firstname,
    password: state.reducer.password
});
MessageToUserForm = connect(mapStateToProps)(MessageToUserForm);
export default reduxForm({
    form: 'messageToUser',
    onSubmit
})(MessageToUserForm);
