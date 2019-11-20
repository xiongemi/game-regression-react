import { call, put, takeLatest } from 'redux-saga/effects';

import { ApiUrls } from '../../types/api-urls.const';

import { FETCH_GAMES, fetchGamesFailed, fetchGamesSuccess } from './game.actions';

function* fetchGames() {
  try {
    const response = yield call(fetch, ApiUrls.games, {
      method: 'GET',
    });
    const profile = yield response.json();
    yield put(fetchGamesSuccess(profile));
  } catch (error) {
    yield put(fetchGamesFailed(error));
  }
}

export function* gameSagas() {
  yield takeLatest(FETCH_GAMES, fetchGames);
}
