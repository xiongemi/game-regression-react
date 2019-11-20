import { all } from 'redux-saga/effects';

import { profileSagas } from '../profile/store/profile.sagas';

import { gameSagas } from './game/game.sagas';

export function* rootSagas() {
  yield all([profileSagas(), gameSagas()]);
}
