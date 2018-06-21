import React, { PureComponent } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeChannel } from '../store/makeChannel';


class NewChannelForm extends PureComponent {
    render () {
        const { handleSubmit, channels } = this.props;//eslint-disable-line
        let c = channels.map((channel, index) => <li key={index}>{channel}</li>);

        return (
            <div id="channelform">

                <div><h3>Existing channels</h3>
                    <ul>
                        {c}
                    </ul>
                </div>

                <form onSubmit={handleSubmit}>
                    <div><h3>Make a new channel</h3></div>
                    <div>
                        <label>New Channel Name: </label>
                        <div>
                            <Field className="input" name="channel" component="input" type="text" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" >
                            Add channel
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
const onSubmit = ({ channel }, dispatch) => {
    dispatch(makeChannel(channel));
    dispatch(reset('channel'));
};
const mapStateToProps = (state) => ({
    channels: state.channels.channels
});

NewChannelForm = connect(mapStateToProps)(NewChannelForm);
NewChannelForm = reduxForm({
    form: 'channel',
    onSubmit
})(NewChannelForm);

export default NewChannelForm;
