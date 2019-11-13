import { call, put, takeLatest } from 'redux-saga/effects';

import { apiUrl } from '../../url.const';

import { FETCH_PROFILE, fetchProfileFailed, fetchProfileSuccess } from './profile.actions';

function* fetchProfile() {
  try {
    const response = yield call(fetch, apiUrl + '/profile');
    const profile = yield response.json();
    yield put(fetchProfileSuccess(profile));
  } catch (error) {
    yield put(fetchProfileFailed(error));
  }
}

export function* profileSagas() {
  yield takeLatest(FETCH_PROFILE, fetchProfile);
}
