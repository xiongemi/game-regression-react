import React from 'react';
import {
  Button,
  CircularProgress,
  IconButton,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { FormikProps } from 'formik';
import { Translation } from 'react-i18next';

import { createRouterLinkForward } from '../../../shared/create-router-link-forward.util';
import { Routes } from '../../../types/routes.enum';
import { ProfileEditProps } from '../profile-edit-props.interface';

import { ProfileEditFormValues } from './profile-edit-form-values.interface';
import { ProfileEditFormState } from './profile-edit-form-state.interface';

export class ProfileEditForm extends React.Component<
  ProfileEditProps & FormikProps<ProfileEditFormValues>,
  ProfileEditFormState
> {
  constructor(props: ProfileEditProps & FormikProps<ProfileEditFormValues>) {
    super(props);
    this.state = {
      isSnackBarOpen: false,
    };
  }

  componentDidMount(): void {
    this.props.resetStatus();
  }

  componentDidUpdate(prevProps: ProfileEditProps & FormikProps<ProfileEditFormValues>) {
    if (this.props.isSaved && !prevProps.isSaved) {
      this.props.history.push(Routes.profile);
      this.props.setSubmitting(false);
      return;
    }
    if (this.props.hasFailed && !prevProps.hasFailed) {
      this.setState({ isSnackBarOpen: this.props.hasFailed });
    }
  }

  handleClose() {
    this.setState({ isSnackBarOpen: false });
  }

  render(): React.ReactNode {
    return (
      <Translation>
        {t => (
          <React.Fragment>
            <form onSubmit={this.props.handleSubmit}>
              <Paper className="ma3 pa3 flex justify-between" elevation={3}>
                <Typography variant="h6">Edit My Profile</Typography>
                <div>
                  <Button type="submit" variant="contained" disabled={this.props.isPending}>
                    Save
                    {this.props.isPending && <CircularProgress size={20} />}
                  </Button>
                  <Button
                    variant="contained"
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
                  label="First Name:"
                  margin="normal"
                  name="firstName"
                  value={this.props.values.firstName}
                  onChange={this.props.handleChange}
                  onBlur={this.props.handleBlur}
                  error={Boolean(this.props.errors.firstName)}
                  helperText={this.props.errors.firstName && t(this.props.errors.firstName)}
                  disabled={this.props.isPending}
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
                  disabled={this.props.isPending}
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
                  disabled={this.props.isPending}
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
                  disabled={this.props.isPending}
                />
              </Paper>
            </form>
            {this.state.isSnackBarOpen}
            <Snackbar
              open={this.state.isSnackBarOpen}
              autoHideDuration={3000}
              onClose={this.handleClose.bind(this)}
              ContentProps={{
                'aria-describedby': 'edit-profile-failed',
              }}
              message={<span id="edit-profile-failed"> {t('editProfileFailed')} </span>}
              action={[
                <IconButton
                  key="close"
                  aria-label="close"
                  color="inherit"
                  onClick={this.handleClose.bind(this)}
                >
                  <Close />
                </IconButton>,
              ]}
            />
          </React.Fragment>
        )}
      </Translation>
    );
  }
}
