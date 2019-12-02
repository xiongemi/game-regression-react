import { call, put, takeLatest, select } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { ApiUrls } from '../../types/api-urls.const';

import {
  DELETE_GAME,
  deleteGameFailed,
  deleteGameSuccess,
  FETCH_GAMES,
  fetchGamesFailed,
  fetchGamesSuccess,
  UPDATE_GAME,
  updateGameFailed,
  updateGameSuccess,
} from './games.actions';
import { getGames } from './games.selectors';

function* fetchGamesForcedRefresh() {
  try {
    const response = yield call(fetch, ApiUrls.games, {
      method: 'GET',
    });
    const games = yield response.json();
    yield put(fetchGamesSuccess(games));
  } catch (error) {
    yield put(fetchGamesFailed(error));
  }
}

function* fetchGames() {
  const games = yield select(getGames);
  if (games.length) {
    yield put(fetchGamesSuccess(games));
    return;
  }
  yield fetchGamesForcedRefresh();
}

function* updateGame(action: AnyAction) {
  try {
    const response = yield call(fetch, `${ApiUrls.games}/${action.game.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.game),
    });
    const game = yield response.json();
    yield put(updateGameSuccess(game));
    yield fetchGamesForcedRefresh();
  } catch (error) {
    yield put(updateGameFailed(error));
  }
}

function* deleteGame(action: AnyAction) {
  try {
    yield call(fetch, `${ApiUrls.games}/${action.game.id}`, {
      method: 'DELETE',
    });
    yield put(deleteGameSuccess());
    yield fetchGamesForcedRefresh();
  } catch (error) {
    yield put(deleteGameFailed(error));
  }
}

export function* gamesSagas() {
  yield takeLatest(FETCH_GAMES, fetchGames);
  yield takeLatest(UPDATE_GAME, updateGame);
  yield takeLatest(DELETE_GAME, deleteGame);
}
