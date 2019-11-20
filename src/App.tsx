import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ConnectedHeader } from './header/header.container';
import { Menu } from './menu/Menu';
import { rootStore } from './store/root-store';
import { Routes } from './types/routes.enum';

import './i18n';
import { CircularProgress } from '@material-ui/core';

const Dashboard = React.lazy(() => import('./dashboard/Dashboard'));
const Profile = React.lazy(() => import('./profile/ProfileRouter'));

export class App extends React.Component {
  render(): React.ReactNode {
    return (
      <React.Suspense fallback={<CircularProgress />}>
        <Provider store={rootStore}>
          <BrowserRouter>
            <ConnectedHeader />
            <Menu />

            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path={Routes.profile} component={Profile} />
              <Route path={Routes.dashboard}>
                <Redirect to="/" />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </BrowserRouter>
        </Provider>
      </React.Suspense>
    );
  }
}
