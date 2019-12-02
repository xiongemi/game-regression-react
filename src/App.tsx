import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router';

import { CenteredCircularProgress } from './shared/CenteredCircularProgress';
import { HeaderContainer } from './header/header.container';
import { MenuContainer } from './menu/menu-container';
import { rootStore, history } from './store/root-store';
import { Routes } from './types/routes.enum';

import './i18n';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9dafbd',
      contrastText: '#1e2e3b',
    },
    secondary: {
      main: '#1e2e3b',
      contrastText: '#d6dbdf',
    },
  },
});

const Dashboard = React.lazy(() => import('./dashboard/dashboard-container'));
const Profile = React.lazy(() => import('./profile/ProfileRouter'));
const Games = React.lazy(() => import('./games/GameRouter'));

export class App extends React.Component {
  render(): React.ReactNode {
    return (
      <React.Suspense fallback={<CenteredCircularProgress />}>
        <Provider store={rootStore}>
          <ConnectedRouter history={history}>
            <ThemeProvider theme={theme}>
              <HeaderContainer />
              <MenuContainer />

              <div className="mh0 mh5-m mh6-l">
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route path={Routes.profile} component={Profile} />
                  <Route path={Routes.games} component={Games} />
                  <Route path={Routes.dashboard}>
                    <Redirect to="/" />
                  </Route>
                  <Route path="*">
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </div>
            </ThemeProvider>
          </ConnectedRouter>
        </Provider>
      </React.Suspense>
    );
  }
}
