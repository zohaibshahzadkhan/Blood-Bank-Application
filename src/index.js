import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import config from "./store/config";
import App from './containers/app';
import {DonarForm,DashBoard,CardWithAvatar} from "./component"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppTheme from "./darkbaseTheme"
import injectTapEventPlugin from 'react-tap-event-plugin';

import {Provider} from "react-redux";
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
injectTapEventPlugin();

ReactDOM.render(
  //to get state into react compnent we use provider
 <MuiThemeProvider muiTheme={AppTheme}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={CardWithAvatar}/>
        <Route path="/dashboard" component={DashBoard}/>
        <Route path="/donateform" component ={DonarForm} />

        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
