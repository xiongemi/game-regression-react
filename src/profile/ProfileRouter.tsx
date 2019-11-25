import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';

import { ProfileViewContainer } from './profile-view/profile-view.container';
import { ProfileEditContainer } from './profile-edit/profile-edit.container';

export default class ProfileRouter extends React.Component<RouteComponentProps> {
  render(): React.ReactNode {
    return (
      <Switch>
        <Route exact path={this.props.match.path} component={ProfileViewContainer} />
        <Route path={`${this.props.match.path}/edit`} component={ProfileEditContainer} />
      </Switch>
    );
  }
}
