import React from 'react';
import GroupIndexItem from './group_index_item';


class GroupIndex extends React.Component {

    componentDidMount() {
        this.props.fetchGroups();
        // window.scrollTo(0, 0);
    }

    render() {
        let groups = this.props.groups.map((group) => {
            if (this.props.currentUserGroups.includes(group.id)) {
                return (
                    <GroupIndexItem key = {group.id} group = {group} />
                );
            }
        });
        return (
            <div className="group-list">
                <h1>YOUR GROUPS</h1>
                <div className="group-grid">
                    {groups}
                </div>
            </div>
        );
    }
}

export default GroupIndex;