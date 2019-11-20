import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ConnectedHeader } from './header/header.container';
import { Menu } from './menu/Menu';
import { Dashboard } from './dashboard/Dashboard';
import { rootStore } from './store/root-store';
import { Routes } from './types/routes.enum';
import { ProfileRouter } from './profile/ProfileRouter';

import './i18n';

export class App extends React.Component {
  render(): React.ReactNode {
    return (
      <Provider store={rootStore}>
        <BrowserRouter>
          <ConnectedHeader />
          <Menu />

          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path={Routes.profile} component={ProfileRouter} />
            <Route path={Routes.dashboard}>
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
