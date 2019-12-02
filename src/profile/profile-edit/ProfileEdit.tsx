import React from 'react';

import { CenteredCircularProgress } from '../../shared/CenteredCircularProgress';

import { ProfileEditFormik } from './profile-edit-form/profile-edit-form.container';
import { ProfileEditProps } from './profile-edit-props.interface';
import { ProfileEditSaveErrorSnackbar } from './profile-edit-save-error-snackbar/ProfileEditSaveErrorSnackbar';

export class ProfileEdit extends React.Component<ProfileEditProps> {
  render(): React.ReactNode {
    return this.props.profile ? (
      <React.Fragment>
        <ProfileEditFormik {...this.props} />
        <ProfileEditSaveErrorSnackbar hasFailed={this.props.hasFailed} t={this.props.t} />
      </React.Fragment>
    ) : (
      <CenteredCircularProgress />
    );
  }
}
