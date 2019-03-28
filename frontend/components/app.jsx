import React from 'react';

import {
    Route,
    Redirect,
    Switch, 
    Link,
    HashRouter
} from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import videoBanner from './video_banner/video_banner';

import { AuthRoute } from '../util/route_util';


const app = () => (
    <div>
        <header>
            <div className="Navbar">
                <Link to="/">
                    <img id="logo" src="https://www.meetup.com/mu_static/en-US/logo--script.004ada05.svg" />
                </Link>
                <div id="nav-links">
                    <NavBarContainer id="nav-links"/>
                </div>

            </div>
        </header>
        <Switch>
            <Route exact path="/" component={videoBanner}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default app;