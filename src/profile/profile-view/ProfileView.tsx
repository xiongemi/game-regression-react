import React from 'react';
import { Button, Paper, Typography } from '@material-ui/core';

import { createRouterLinkForward } from '../../shared/create-router-link-forward.util';
import { Routes } from '../../types/routes.enum';
import { CenteredCircularProgress } from '../../shared/CenteredCircularProgress';

import { ProfileViewProps } from './profile-view-props.interface';

export class ProfileView extends React.Component<ProfileViewProps> {
  render(): React.ReactNode {
    return this.props.profile ? (
      <React.Fragment>
        <Paper className="ma3 pa3 flex justify-between" elevation={3}>
          <Typography variant="h6">{this.props.t('myProfile')}</Typography>
          <Button
            variant="contained"
            color="primary"
            component={createRouterLinkForward(Routes.profileEdit)}
          >
            Edit
          </Button>
        </Paper>

        <Paper className="ma3 pa3" elevation={3}>
          <div className="b">{this.props.t('name')}:</div>
          <Typography variant="body1">
            {this.props.profile.firstName} {this.props.profile.lastName}
          </Typography>

          <div className="b mt2">{this.props.t('avatarImageUrl')}:</div>
          <Typography variant="body1">{this.props.profile.image}</Typography>

          <div className="b mt2">{this.props.t('averageNumberOfHoursPerDay')}:</div>
          <Typography variant="body1">{this.props.profile.averageNumberOfHoursPerDay}</Typography>
        </Paper>
      </React.Fragment>
    ) : (
      <CenteredCircularProgress />
    );
  }
}
