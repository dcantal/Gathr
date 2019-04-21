import React from 'react';
import GroupShowEventIndexItem from './group_show_event_index_item';


class GroupShowEventIndex extends React.Component {

    componentDidMount() {
        this.props.fetchGroup();
        // window.scrollTo(0, 0);
    }

    render() {
        let events = this.props.events.map((event) => {
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