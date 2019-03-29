import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import SignupAlt from './signup_alt';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Continue',
        navLink: <Link to="/login">Log in</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        demoLogin: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupAlt);