import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { push } from 'redux-first-routing';
import { send } from '../store/websocket';


class ChannelListComponent extends PureComponent {
    render () {
        const { channels, dispatch, handleSubmit } = this.props;


        let c = channels.map((channel, index) => (
            <li key={index}>
                <button className="pure-button" onClick={() => {
                    dispatch(push("/channels"));
                }}
                >{channel}
                </button>
            </li >
        ));
        return (
            <div>
                <div>Channels:
                    <ul>
                        {c}
                    </ul>
                </div>
                <form onSubmit={handleSubmit} className="pure-form">
                    <div>
            Add:
                        <Field name="newChannel" component="input" type="text" />
                        <button type="submit" className="pure-button">Add channel</button>
                    </div>
                </form>

            </div >
        );
    }
}
const onSubmit = ({ newChannel }, dispatch) => {
    let sendToServer = JSON.stringify({ command: 'join', channel: newChannel });
    dispatch({ type: send, payload: sendToServer });
};

const mapStateToProps = (state) => ({
    channels: state.received.channels
});
ChannelListComponent.propTypes = {
    channels: PropTypes.array,
    dispatch: PropTypes.func,
    handleSubmit: PropTypes.func
};
ChannelListComponent = reduxForm({
    form: 'newchannel',
    onSubmit
})(ChannelListComponent);
export default connect(mapStateToProps)(ChannelListComponent);
