import React from 'react';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';

export class Menu extends React.Component {
  render(): React.ReactNode {
    return (
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Dashboard
        </Link>
        <Link color="inherit" href="/getting-started/installation/">
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
    );
  }
}
