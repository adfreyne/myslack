import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewChannelForm extends PureComponent {
    render () {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <div>
                        <Field
                            name="channelname"
                            component="input"
                            type="text"
                        />
                    </div>
                </div>
                <div>
                    <label>Description/Purpose</label>
                    <div>
                        <Field
                            name="description"
                            component="input"
                            type="text"
                        />
                    </div>
                </div>
                <div>
                    <label>Send invites to:</label>
                    <div>
                        <Field
                            name="invites"
                            component="select"
                            type="text"
                            placeholder="search by name"
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" >
            Submit
                    </button>
                    <button type="button" >
            Clear Values
                    </button>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'channel'
})(NewChannelForm);
