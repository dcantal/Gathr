import React from 'react';
import GroupIndexItem from './group_index_item';


class GroupIndex extends React.Component {

    componentDidMount() {
        this.props.fetchGroups();
    }

    render() {
        let groups = this.props.groups.map((group) => {
            return (
                <GroupIndexItem key = {group.name} group = {group} />
            );
        });
        return (
            <div className="group-list">
                <ul className="group-unordered-list">
                    {groups}
                </ul>
            </div>
        );
    }
}

export default GroupIndex;