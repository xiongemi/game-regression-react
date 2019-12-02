import { withFormik } from 'formik';
import * as Yup from 'yup';
import { isEqual } from 'lodash-es';

import { Game } from '../../../store/games/types/game.interface';
import { FormsErrors } from '../../../shared/form-errors.enum';

import { GameEditFormProps } from './game-edit-form-props.interface';
import { GameEditForm } from './GameEditForm';

export const GameEditFormik = withFormik({
  mapPropsToValues: (props: GameEditFormProps): Game => {
    return props.game;
  },

  validationSchema: () => {
    return Yup.object().shape({
      name: Yup.string().required(FormsErrors.requiredError),
      image: Yup.string().required(FormsErrors.requiredError),
      numberOfHoursToComplete: Yup.number()
        .required(FormsErrors.requiredError)
        .moreThan(0, FormsErrors.greaterThanMinError),
      priority: Yup.number()
        .required(FormsErrors.requiredError)
        .min(0, FormsErrors.greaterOrEqualToMinError)
        .max(10, FormsErrors.lessOrEqualToMaxError),
      numberOfHoursPlayed: Yup.number()
        .required(FormsErrors.requiredError)
        .min(0, FormsErrors.greaterOrEqualToMinError),
      isComplete: Yup.boolean(),
    });
  },

  handleSubmit: (values, { props, setSubmitting }) => {
    if (isEqual(values, props.game)) {
      setSubmitting(false);
      props.goBackToGames();
    } else {
      setSubmitting(true);
      props.updateGame(values);
    }
  },

  displayName: 'GameEditForm',
  enableReinitialize: true,
})(GameEditForm);
