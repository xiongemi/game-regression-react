import React from 'react';
import { RouteComponentProps } from 'react-router';

import { CenteredCircularProgress } from '../../shared/CenteredCircularProgress';

import { ProfileEditFormik } from './profile-edit-form/profile-edit-form.container';
import { ProfileEditProps } from './profile-edit-props.interface';

export class ProfileEdit extends React.Component<ProfileEditProps & RouteComponentProps> {
  render(): React.ReactNode {
    return this.props.profile ? (
      <ProfileEditFormik
        profile={this.props.profile}
        editProfile={this.props.editProfile}
        resetStatus={this.props.resetStatus}
        isPending={this.props.isPending}
        history={this.props.history}
        isSaved={this.props.isSaved}
        hasFailed={this.props.hasFailed}
      />
    ) : (
      <CenteredCircularProgress />
    );
  }
}
