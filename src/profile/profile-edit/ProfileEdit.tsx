import React from 'react';
import { CircularProgress } from '@material-ui/core';

import { ProfileEditFormik } from './profile-edit-form/profile-edit-form.container';
import { ProfileEditProps } from './profile-edit-props.interface';

export class ProfileEdit extends React.Component<ProfileEditProps> {
  render(): React.ReactNode {
    return this.props.profile ? (
      <ProfileEditFormik profile={this.props.profile} editProfile={this.props.editProfile} />
    ) : (
      <CircularProgress />
    );
  }
}
