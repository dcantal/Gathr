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
import CreateGroupFormContainer from '../components/groups/create_group_form_container';
import FindPage from './find/find_page';
import GroupShowContainer from './groups/group_show_container';
import SignupAltContainer from './session_form/signup_alt_container';

import { AuthRoute } from '../util/route_util';


const app = () => (
    <div>
        <header>
            <nav className="Navbar">
                <Link className="logo" to="/">
                    <img id="logo" src="https://www.meetup.com/mu_static/en-US/logo--script.004ada05.svg" />
                </Link>
                <div id="nav-links">
                    <NavBarContainer id="nav-links"/>
                </div>

            </nav>
        </header>
        <Switch>
            <AuthRoute exact path="/register" component={SignupAltContainer} />
            <Route exact path="/groups/new" component={CreateGroupFormContainer} />
            <Route exact path="/" component={videoBanner}/>
            <Route exact path="/find" component={FindPage}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path="/groups/:groupId" component={GroupShowContainer} />
        </Switch>
    </div>
);

export default app;