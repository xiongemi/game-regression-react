import { withFormik } from 'formik';
import * as Yup from 'yup';
import { isEqual } from 'lodash-es';

import { ProfileEditProps } from '../profile-edit-props.interface';
import { Profile } from '../../../store/profile/types/profile.interface';
import { Routes } from '../../../types/routes.enum';
import { FormsErrors } from '../../../shared/form-errors.enum';

import { ProfileEditForm } from './ProfileEditForm';
import { ProfileEditFormValues } from './profile-edit-form-values.interface';

export const ProfileEditFormik = withFormik({
  mapPropsToValues: (props: ProfileEditProps): ProfileEditFormValues => {
    return {
      firstName: props.profile ? props.profile.firstName : '',
      lastName: props.profile ? props.profile.lastName : '',
      imageUrl: props.profile ? props.profile.image : '',
      averageHoursPerDay: props.profile ? props.profile.averageNumberOfHoursPerDay : 0,
    };
  },

  validationSchema: () => {
    return Yup.object().shape({
      firstName: Yup.string()
        .required(FormsErrors.requiredError)
        .matches(/^[A-Z]+$/i, FormsErrors.alphabetError),
      lastName: Yup.string()
        .required(FormsErrors.requiredError)
        .matches(/^[A-Z]+$/i, FormsErrors.alphabetError),
      imageUrl: Yup.string().required(FormsErrors.requiredError),
      averageHoursPerDay: Yup.number()
        .required()
        .moreThan(0, FormsErrors.greaterThanMinError)
        .max(10, FormsErrors.lessThanMaxError),
    });
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

    if (isEqual(profile, props.profile)) {
      setSubmitting(false);
      props.history.push(Routes.profile);
    } else {
      setSubmitting(true);
      props.editProfile(profile);
    }
  },

  displayName: 'EditProfileForm',
  enableReinitialize: true,
})(ProfileEditForm);
