import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ConnectedHeader } from './header/header.container';
import { Menu } from './menu/Menu';
import { Dashboard } from './dashboard/Dashboard';
import { rootStore } from './store/root-store';

import './App.css';

export class App extends React.Component {
  render(): React.ReactNode {
    return (
      <Provider store={rootStore}>
        <ConnectedHeader />
        <Menu></Menu>

        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/dashboard">
              <Redirect to="/" />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
