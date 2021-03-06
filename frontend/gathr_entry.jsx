import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as SessionActions from './actions/session_actions';
// import * as GroupActions from './actions/group_actions';
import * as GroupAjax from './util/group_api_util';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');

    //testing start//

    // window.createGroup = GroupActions.createGroup;

    //testing end//


    ReactDOM.render(<Root store={ store }/>, root);
    // ReactDOM.render(<h1 store={ store }>Welcome to Meetup</h1>, root);
});