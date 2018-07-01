import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MessageListComponent extends PureComponent {
    render () {
        const { received } = this.props;
        let m = received.map((mess, index) => <li className="messageListItem" key={index}>{mess}</li>);
        let time = new Date().toDateString();
        return (

            <div className="pure-u-3-4" id="messagelist">
                <div>
                    <ul>{time}{m}</ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    received: state.received.received
});
MessageListComponent.propTypes = {
    received: PropTypes.array
};

export default connect(mapStateToProps)(MessageListComponent);
