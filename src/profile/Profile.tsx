import React from 'react';
import { Button, CircularProgress, Paper, Typography } from '@material-ui/core';

import { createRouterLinkForward } from '../shared/create-router-link-forward.util';
import { Routes } from '../types/routes.enum';

import { ProfileProps } from './profile-props.interface';

export class Profile extends React.Component<ProfileProps> {
  render(): React.ReactNode {
    return this.props.profile ? (
      <React.Fragment>
        <Paper className="ma3 pa3 flex justify-between" elevation={3}>
          <Typography variant="h6">My Profile</Typography>
          <Button variant="contained" component={createRouterLinkForward(Routes.profileEdit)}>
            Edit
          </Button>
        </Paper>

        <Paper className="ma3 pa3" elevation={3}>
          <div className="b">Name:</div>
          <Typography variant="body1">
            {this.props.profile.firstName} {this.props.profile.lastName}
          </Typography>

          <div className="b mt2">Avatar Image Url:</div>
          <Typography variant="body1">{this.props.profile.image}</Typography>

          <div className="b mt2">Average Number Of Hours Per Day:</div>
          <Typography variant="body1">{this.props.profile.averageNumberOfHoursPerDay}</Typography>
        </Paper>
      </React.Fragment>
    ) : (
      <CircularProgress />
    );
  }
}
