import { call, put, takeLatest, select } from 'redux-saga/effects';

import { ApiUrls } from '../../types/api-urls.const';

import { FETCH_PLATFORMS, fetchPlatformsFailed, fetchPlatformsSuccess } from './platforms.actions';
import { getPlatforms } from './platforms.selectors';

function* fetchPlatforms() {
  try {
    let platforms = yield select(getPlatforms);
    if (platforms.length) {
      yield put(fetchPlatformsSuccess(platforms));
      return;
    }
    const response = yield call(fetch, ApiUrls.platforms, {
      method: 'GET',
    });
    platforms = yield response.json();
    yield put(fetchPlatformsSuccess(platforms));
  } catch (error) {
    yield put(fetchPlatformsFailed(error));
  }
}

export function* platformsSagas() {
  yield takeLatest(FETCH_PLATFORMS, fetchPlatforms);
}
