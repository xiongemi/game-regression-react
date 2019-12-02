import React from 'react';
import { Button, CircularProgress, Paper, TextField, Typography } from '@material-ui/core';
import { FormikProps } from 'formik';
import { Error } from '@material-ui/icons';
import { isEmpty } from 'lodash-es';

import { createRouterLinkForward } from '../../../shared/create-router-link-forward.util';
import { Routes } from '../../../types/routes.enum';
import { ProfileEditProps } from '../profile-edit-props.interface';

import { ProfileEditFormValues } from './profile-edit-form-values.interface';
import { ProfileEditFormState } from './profile-edit-form-state.interface';

export class ProfileEditForm extends React.Component<
  ProfileEditProps & FormikProps<ProfileEditFormValues>,
  ProfileEditFormState
> {
  componentDidMount(): void {
    this.props.resetStatus();
  }

  componentDidUpdate(prevProps: ProfileEditProps & FormikProps<ProfileEditFormValues>) {
    if (this.props.isSaved && !prevProps.isSaved) {
      this.props.history.push(Routes.profile);
      return;
    }
  }

  render(): React.ReactNode {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Paper className="ma3 pa3 flex justify-between bg-blue text-light" elevation={3}>
          <Typography variant="h6">{this.props.t('editMyProfile')}</Typography>
          <div>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={this.props.isPending}
            >
              Save
              {this.props.isPending && <CircularProgress size={20} />}
              {!isEmpty(this.props.errors) && <Error />}
            </Button>
            <Button
              variant="contained"
              color="primary"
              component={createRouterLinkForward(Routes.profile)}
              disabled={this.props.isPending}
            >
              Cancel
            </Button>
          </div>
        </Paper>

        <Paper className="ma3 pa3" elevation={3}>
          <TextField
            fullWidth
            label={`${this.props.t('firstName')}:`}
            margin="normal"
            name="firstName"
            value={this.props.values.firstName}
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            error={Boolean(this.props.errors.firstName)}
            helperText={this.props.errors.firstName && this.props.t(this.props.errors.firstName)}
            disabled={this.props.isPending}
          />

          <TextField
            fullWidth
            label={`${this.props.t('lastName')}:`}
            margin="normal"
            name="lastName"
            value={this.props.values.lastName}
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            error={Boolean(this.props.errors.lastName)}
            helperText={this.props.errors.lastName && this.props.t(this.props.errors.lastName)}
            disabled={this.props.isPending}
          />

          <TextField
            fullWidth
            label={`${this.props.t('avatarImageUrl')}:`}
            margin="normal"
            name="imageUrl"
            value={this.props.values.imageUrl}
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            error={Boolean(this.props.errors.imageUrl)}
            helperText={this.props.errors.imageUrl && this.props.t(this.props.errors.imageUrl)}
            disabled={this.props.isPending}
          />

          <TextField
            fullWidth
            label={`${this.props.t('averageNumberOfHoursPerDay')}:`}
            type="number"
            margin="normal"
            name="averageHoursPerDay"
            value={this.props.values.averageHoursPerDay}
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            error={Boolean(this.props.errors.averageHoursPerDay)}
            helperText={
              this.props.errors.averageHoursPerDay &&
              this.props.t(this.props.errors.averageHoursPerDay, { min: 0, max: 10 })
            }
            disabled={this.props.isPending}
          />
        </Paper>
      </form>
    );
  }
}
