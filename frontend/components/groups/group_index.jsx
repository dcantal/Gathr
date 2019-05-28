import React from 'react';
import GroupIndexItem from './group_index_item';


class GroupIndex extends React.Component {

    componentDidMount() {
        this.props.fetchGroups();
    }

    render() {
        let groups;
        if (!this.props.matches) {
            return <div className="loading-icon"><img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg"></img></div>;
        }
        if (this.props.matches.length > 0 && this.props.matches[0] !== -1) {
            groups = this.props.groups.map((group) => {
                if (this.props.matches.includes(group.id)) {
                    return (
                        <GroupIndexItem key={group.id} group={group} />
                    );
                }
            });
        }
        else if (this.props.matches.length === 0){
            groups = this.props.groups.map((group) => {
                return (
                    <GroupIndexItem key={group.id} group={group} />
                );
            });
        }
        else {
            return (
                <div className="group-list">
                    <h1>NO GROUPS FOUND</h1>
                </div>
            );
        }
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