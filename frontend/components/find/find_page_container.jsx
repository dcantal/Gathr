import { connect } from "react-redux";
import FindPage from './find_page';
import { fetchEvents } from '../../actions/event_actions';
import { receiveCurrentUser } from "../../actions/session_actions";

const mapStateToProps = state => {
  let events = Object.values(state.entities.events);
  let groups = Object.values(state.entities.groups);
  return {
    events: events,
    groups: groups,
    currentUser: state.session.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    fetchGroups: () => dispatch(fetchGroups()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindPage);
