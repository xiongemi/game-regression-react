import React from 'react';
import { AppBar, Avatar, Link, Toolbar, Typography } from '@material-ui/core';

import profilePicture from '../assets/profile-picture.jpg';
import { createRouterLinkForward } from '../shared/create-router-link-forward.util';
import { Routes } from '../types/routes.enum';

import { HeaderProps } from './header-props.interface';

export class Header extends React.Component<HeaderProps> {
  componentDidMount(): void {
    this.props.fetchProfile();
  }

  render(): React.ReactNode {
    return (
      <AppBar position="static">
        <Toolbar className="justify-between">
          <Typography variant="h6">Game Progression</Typography>
          {this.props.profile && (
            <Link
              color="inherit"
              component={createRouterLinkForward(Routes.profile)}
              className="flex items-center"
            >
              <Avatar alt="profile image" src={profilePicture} />
              <span className="ml2">
                {this.props.profile.firstName} {this.props.profile.lastName}
              </span>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}
