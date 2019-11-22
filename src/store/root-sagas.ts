import { all } from 'redux-saga/effects';

import { profileSagas } from './profile/profile.sagas';
import { gamesSagas } from './games/games.sagas';
import { platformsSagas } from './platforms/platforms.sagas';

export function* rootSagas() {
  yield all([profileSagas(), gamesSagas(), platformsSagas()]);
}
