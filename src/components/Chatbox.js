import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { send } from '../store/index.js';

class Chatbox extends PureComponent {
    render () {
        const { messages, handleSubmit } = this.props;
        let m = messages.map((message, index) => <li key={index}>{message}</li>);
        return (
            <div>
                <div>Chatbox:
                    <ul>
                        {m}
                    </ul>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label />
                            <div>
                                <Field className="input" name="message" component="input" type="text" />
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
    messages: state.chat.messages
});

Chatbox = reduxForm({
    form: 'chat',
    onSubmit
})(Chatbox);

Chatbox = connect(mapStateToProps)(Chatbox);

export default Chatbox;
