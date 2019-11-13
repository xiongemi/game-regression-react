import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { rootSagas } from './root-sagas';
import { rootReducer } from './root-reducer';

const sagaMiddleware = createSagaMiddleware();
export const rootStore = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSagas);
