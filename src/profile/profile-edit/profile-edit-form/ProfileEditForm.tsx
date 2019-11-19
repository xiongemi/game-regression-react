import React from 'react';
import { Button, Paper, TextField, Typography } from '@material-ui/core';
import { FormikProps } from 'formik';
import { Translation } from 'react-i18next';

import { createRouterLinkForward } from '../../../shared/create-router-link-forward.util';
import { Routes } from '../../../types/routes.enum';
import { ProfileEditProps } from '../profile-edit-props.interface';

import { ProfileEditFormValues } from './profile-edit-form-values.interface';

export class ProfileEditForm extends React.Component<
  ProfileEditProps & FormikProps<ProfileEditFormValues>
> {
  render(): React.ReactNode {
    return (
      <Translation>
        {t => (
          <form onSubmit={this.props.handleSubmit}>
            <Paper className="ma3 pa3 flex justify-between" elevation={3}>
              <Typography variant="h6">Edit My Profile</Typography>
              <div>
                <Button type="submit" variant="contained">
                  Save
                </Button>
                <Button
                  variant="contained"
                  className="ml2"
                  component={createRouterLinkForward(Routes.profile)}
                >
                  Cancel
                </Button>
              </div>
            </Paper>

            <Paper className="ma3 pa3" elevation={3}>
              <TextField
                fullWidth
                label="First Name:"
                margin="normal"
                name="firstName"
                value={this.props.values.firstName}
                onChange={this.props.handleChange}
                onBlur={this.props.handleBlur}
                error={Boolean(this.props.errors.firstName)}
                helperText={this.props.errors.firstName && t(this.props.errors.firstName)}
              />

              <TextField
                fullWidth
                label="Last Name:"
                margin="normal"
                name="lastName"
                value={this.props.values.lastName}
                onChange={this.props.handleChange}
                onBlur={this.props.handleBlur}
                error={Boolean(this.props.errors.lastName)}
                helperText={this.props.errors.lastName && t(this.props.errors.lastName)}
              />

              <TextField
                fullWidth
                label="Avatar Image Url:"
                margin="normal"
                name="imageUrl"
                value={this.props.values.imageUrl}
                onChange={this.props.handleChange}
                onBlur={this.props.handleBlur}
                error={Boolean(this.props.errors.imageUrl)}
                helperText={this.props.errors.imageUrl && t(this.props.errors.imageUrl)}
              />

              <TextField
                fullWidth
                label="Average Number Of Hours Per Day:"
                type="number"
                margin="normal"
                name="averageHoursPerDay"
                value={this.props.values.averageHoursPerDay}
                onChange={this.props.handleChange}
                onBlur={this.props.handleBlur}
                error={Boolean(this.props.errors.averageHoursPerDay)}
                helperText={
                  this.props.errors.averageHoursPerDay && t(this.props.errors.averageHoursPerDay)
                }
              />
            </Paper>
          </form>
        )}
      </Translation>
    );
  }
}
