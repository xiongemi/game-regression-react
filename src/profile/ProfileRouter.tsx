import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';

import { ProfileContainer } from './profile.container';
import { ConnectedProfileEdit } from './profile-edit/profile-edit.container';

export default class ProfileRouter extends React.Component<RouteComponentProps> {
  render(): React.ReactNode {
    return (
      <Switch>
        <Route exact path={this.props.match.path} component={ProfileContainer} />
        <Route path={`${this.props.match.path}/edit`} component={ConnectedProfileEdit} />
      </Switch>
    );
  }
}
