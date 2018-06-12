import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { send } from '../store/chat.js';

class Chatbox extends PureComponent {
    render () {
        const { messages, handleSubmit } = this.props;
        let m = messages.map((message) => <li key={message}>{message}</li>);
        return (
            <div>
                <div>Chatbox:
                    <ul>
                        {m}
                    </ul>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Interests</label>
                            <div>
                                <Field className="input" name="interests" component="input" type="text" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" >Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
const onSubmit = ({ message }, dispatch) => {
    dispatch(send(message));
};
const mapStateToProps = (state) => ({
    messages: state.reducer.messages
});

Chatbox = reduxForm({
    form: 'chat',
    onSubmit
})(Chatbox);

Chatbox = connect(mapStateToProps)(Chatbox);

export default Chatbox;
