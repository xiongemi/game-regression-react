import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';

import { GameEditContainer } from './game-edit/game-edit.container';
import GamesContainer from './games-container';

export default class GameRouter extends React.Component<RouteComponentProps> {
  render(): React.ReactNode {
    return (
      <Switch>
        <Route exact path={this.props.match.path} component={GamesContainer} />
        <Route path={`${this.props.match.path}/edit/:id`} component={GameEditContainer} />
      </Switch>
    );
  }
}
