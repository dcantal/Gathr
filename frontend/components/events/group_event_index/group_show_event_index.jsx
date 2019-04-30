import React from 'react';
import GroupShowEventIndexItem from './group_show_event_index_item';


class GroupShowEventIndex extends React.Component {

    constructor(props){
        super(props);

    }

    componentDidMount() {
    }

    render() {
        if (!this.props.events) {
            return null;
        }
        // let events = this.props.events.map((event) => {
        let events = Object.values(this.props.events).map((event) => {
            return (
                <GroupShowEventIndexItem key={event.id} event={event} />
            );
        });
        return (
            <div className="group-event-list">
                {events}
            </div>
        );
    }
}

export default GroupShowEventIndex;