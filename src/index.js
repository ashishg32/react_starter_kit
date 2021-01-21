import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import store from './reducers/store';

import Dashboard from './containers/Dashboard';
import AppHeader from './components/AppHeader';

// const history = createHistory();

render(
  <Provider store={store}>
    <Router>
      <Grid fluid>
        <AppHeader />
        <Route exact path="/" component={Dashboard} />
      </Grid>      
    </Router>
  </Provider>
  , document.getElementById('root'),
);