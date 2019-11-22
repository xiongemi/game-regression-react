import { withFormik } from 'formik';
import { equals } from 'ramda';

import { cleanUpJson } from '../../../shared/clean-up-json.util';
import { ProfileEditProps } from '../profile-edit-props.interface';
import { Profile } from '../../../store/profile/types/profile.interface';
import { Routes } from '../../../types/routes.enum';

import { ProfileEditForm } from './ProfileEditForm';
import { ProfileEditFormValues } from './profile-edit-form-values.interface';

function nameValidation(name: string): null | string {
  return name ? (name.match(/^[A-Z]+$/i) ? null : 'alphabetError') : 'requiredError';
}

function hoursValidation(hours: number): null | string {
  if (!hours && hours !== 0) {
    return 'requiredError';
  }
  if (hours < 0) {
    return 'greaterThan0Error';
  }
  return null;
}

export const ProfileEditFormik = withFormik({
  mapPropsToValues: (props: ProfileEditProps): ProfileEditFormValues => {
    return {
      firstName: props.profile ? props.profile.firstName : '',
      lastName: props.profile ? props.profile.lastName : '',
      imageUrl: props.profile ? props.profile.image : '',
      averageHoursPerDay: props.profile ? props.profile.averageNumberOfHoursPerDay : 0,
    };
  },

  validate: (values: ProfileEditFormValues) => {
    const errors = cleanUpJson({
      firstName: nameValidation(values.firstName),
      lastName: nameValidation(values.lastName),
      imageUrl: values.imageUrl ? null : 'requiredError',
      averageHoursPerDay: hoursValidation(values.averageHoursPerDay),
    });

    return errors;
  },

  handleSubmit: (values, { props, setSubmitting }) => {
    const profile = {
      id: props.profile && props.profile.id,
      firstName: values.firstName,
      lastName: values.lastName,
      image: values.imageUrl,
      averageNumberOfHoursPerDay: values.averageHoursPerDay,
      languageId: props.profile && props.profile.languageId,
    } as Profile;

    if (equals(profile, props.profile)) {
      props.history.push(Routes.profile);
      setSubmitting(false);
    } else {
      props.editProfile(profile);
      setSubmitting(true);
    }
  },

  displayName: 'EditProfileForm',
  enableReinitialize: true,
})(ProfileEditForm);
