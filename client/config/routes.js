import React from 'react';
import App from '../components/App';
import Single from '../components/Single';
import PhotoGrid from '../components/PhotoGrid';
import {Route, IndexRoute} from 'react-router';

export default  (
  <Route path="/" component={App}>
    <IndexRoute component={PhotoGrid} />
    <Route path="/view/:postId" component={Single} />
  </Route>
);
