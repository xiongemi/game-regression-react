import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { rootSagas } from './root-sagas';
import { createRootReducer } from './root-reducer';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
export const rootStore = createStore(
  createRootReducer(history),
  applyMiddleware(routerMiddleware(history), logger, sagaMiddleware),
);
sagaMiddleware.run(rootSagas);
