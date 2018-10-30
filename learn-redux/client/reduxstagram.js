import React from 'react';
import { render } from 'react-dom';

// import CSS
import css from './styles/style.styl';

// import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// use sentry to monitor for errors
import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';
Raven.config(sentry_url, {
  tags: {
    git_commit: 'aasdfasdf9817-209348',
    userLevel: 'editor'
  }
}).install();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
