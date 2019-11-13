import { all } from 'redux-saga/effects';

import { profileSagas } from '../profile/store/profile.sagas';

export function* rootSagas() {
  yield all([profileSagas()]);
}
