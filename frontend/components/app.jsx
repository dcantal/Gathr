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
import FindPageContainer from './find/find_page_container';
import GroupShowContainer from './groups/group_show_container';
import SignupAltContainer from './session_form/signup_alt_container';
import GroupSettingsContainer from './groups/group_settings/group_settings_container';
import GroupEditContainer from './groups/group_edit/group_edit_container';
import Footer from './footer/footer';
import CreateEventFormContainer from './events/create_events/create_event_form_container';
import EventShowContainer from './events/show_events/event_show_container';
// import GroupMembers from './groups/GroupMembers/group_members';

import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';


const app = () => (
    <div>
        <header>
            <nav className="Navbar">
                <Link className="logo" to="/">
                    <img id="logo" src="https://s3.amazonaws.com/gathr-dc-seeds/gathr-logo-name-2.png" />
                </Link>
                <div id="nav-links">
                    <NavBarContainer id="nav-links"/>
                </div>

            </nav>
        </header>
        <Switch>
            <AuthRoute exact path="/register" component={SignupAltContainer} />
            <ProtectedRoute exact path="/groups/new" component={CreateGroupFormContainer} />
            <AuthRoute exact path="/" component={videoBanner}/>
            <Route exact path="/find" component={FindPageContainer}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/groups/:groupId" component={GroupShowContainer} />
            <ProtectedRoute exact path="/groups/:groupId/manage" component={GroupSettingsContainer} />
            <ProtectedRoute exact path="/groups/:groupId/edit" component={GroupEditContainer} />
            <ProtectedRoute exact path="/groups/:groupId/events/schedule" component={CreateEventFormContainer} />
            <Route exact path="/events/:eventId" component={EventShowContainer} />
        </Switch>
        <Footer />
    </div>
);

export default app;