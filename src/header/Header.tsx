import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

import { HeaderProps } from './header-props.interface';

export class Header extends React.Component<HeaderProps> {
  componentDidMount(): void {
    this.props.fetchProfile();
  }

  render(): React.ReactNode {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Game Progression</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}
