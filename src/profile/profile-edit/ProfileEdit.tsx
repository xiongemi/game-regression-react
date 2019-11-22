import React from 'react';
import { RouteComponentProps } from 'react-router';

import { CenteredCircularProgress } from '../../shared/CenteredCircularProgress';

import { ProfileEditFormik } from './profile-edit-form/profile-edit-form.container';
import { ProfileEditProps } from './profile-edit-props.interface';

export class ProfileEdit extends React.Component<ProfileEditProps & RouteComponentProps> {
  render(): React.ReactNode {
    return this.props.profile ? (
      <ProfileEditFormik {...this.props} />
    ) : (
      <CenteredCircularProgress />
    );
  }
}
