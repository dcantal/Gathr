import React from 'react';
import GroupIndexItem from './group_index_item';


class GroupIndex extends React.Component {

    componentDidMount() {
        this.props.fetchGroups();
    }

    render() {
        debugger
        let groups = this.props.groups.map((group) => {
            debugger
            return (
                <GroupIndexItem key = {group.id} group = {group} />
            );
        });
        debugger
        return (
            <div className="group-list">
                <h1>SUGGESTED GROUPS</h1>
                <div className="group-grid">
                    {groups}
                </div>
            </div>
            // <div>
            //     <h1>Testing</h1>
            // </div>
        );
    }
}

export default GroupIndex;