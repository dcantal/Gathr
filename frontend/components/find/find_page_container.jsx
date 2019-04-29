import { connect } from "react-redux";
import FindPage from './find_page';
import { receiveCurrentUser } from "../../actions/session_actions";

const mapStateToProps = state => {
    let currentUserGroups = state.entities.users[state.session.id].groups;
    return {
        currentUserGroups: currentUserGroups,
    };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentUser: () => dispatch(receiveCurrentUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindPage);
