import React from 'react';


import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';


const app = () => (
    <div>
        <header>
            <div className="Navbar">

                <img id="logo" src="https://www.meetup.com/mu_static/en-US/logo--script.004ada05.svg" />
                <div id="nav-links">
                    <NavBarContainer id="nav-links"/>
                </div>

            </div>
        </header>

        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
);

export default app;