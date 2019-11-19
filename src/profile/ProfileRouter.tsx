import React from 'react';
import { match, Route, Switch } from 'react-router';

import { ConnectedProfile } from './profile.container';
import { ConnectedProfileEdit } from './profile-edit/profile-edit.container';

export class ProfileRouter extends React.Component<{ match: match }> {
  render(): React.ReactNode {
    return (
      <Switch>
        <Route exact path={this.props.match.path} component={ConnectedProfile} />
        <Route path={`${this.props.match.path}/edit`} component={ConnectedProfileEdit} />
      </Switch>
    );
  }
}
