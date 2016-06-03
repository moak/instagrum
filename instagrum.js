import React  from 'react';
import { render}  from 'react-dom';
import routes from './config/routes'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, {history} from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
)
render(router, document.getElementById('instagrumAPP'));
