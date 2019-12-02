import React from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import { ProfileEditSaveErrorSnackbarProps } from './profile-edit-save-error-snackbar-props.interface';
import { ProfileEditSaveErrorSnackbarState } from './profile-edit-save-error-snackbar-state.interface';

export class ProfileEditSaveErrorSnackbar extends React.Component<
  ProfileEditSaveErrorSnackbarProps,
  ProfileEditSaveErrorSnackbarState
> {
  constructor(props: ProfileEditSaveErrorSnackbarProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidUpdate(prevProps: ProfileEditSaveErrorSnackbarProps) {
    if (this.props.hasFailed && !prevProps.hasFailed) {
      this.setState({ isOpen: this.props.hasFailed });
    }
  }

  handleClick() {
    this.setState({ isOpen: false });
  }

  render(): React.ReactNode {
    return (
      <Snackbar
        open={this.state.isOpen}
        autoHideDuration={3000}
        onClose={this.handleClick.bind(this)}
        ContentProps={{
          'aria-describedby': 'edit-profile-failed',
        }}
        message={<span id="edit-profile-failed"> {this.props.t('editProfileFailed')} </span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={this.handleClick.bind(this)}
          >
            <Close />
          </IconButton>,
        ]}
      />
    );
  }
}
