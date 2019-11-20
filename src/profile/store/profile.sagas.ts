import { call, put, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { ApiUrls } from '../../types/api-urls.const';

import {
  EDIT_PROFILE,
  editProfileFailed,
  editProfileSuccess,
  FETCH_PROFILE,
  fetchProfileFailed,
  fetchProfileSuccess,
} from './profile.actions';

function* fetchProfile() {
  try {
    const response = yield call(fetch, ApiUrls.profile, {
      method: 'GET',
    });
    const profile = yield response.json();
    yield put(fetchProfileSuccess(profile));
  } catch (error) {
    yield put(fetchProfileFailed(error));
  }
}

function* editProfile(action: AnyAction) {
  try {
    const response = yield call(fetch, ApiUrls.profile, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.profile),
    });
    const profile = yield response.json();
    yield put(editProfileSuccess(profile));
  } catch (error) {
    yield put(editProfileFailed(error));
  }
}

export function* profileSagas() {
  yield takeLatest(FETCH_PROFILE, fetchProfile);
  yield takeLatest(EDIT_PROFILE, editProfile);
}
