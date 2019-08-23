import { combineReducers, createStore, applyMiddleware } from 'redux'
import rootSaga from '../sagas'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import init from './init'
import test from './test'

// import your rootSaga in there
const sagaMiddleware = createSagaMiddleware()
// import your reducer and combine in there
const rootReducer = combineReducers({ init, test })
// just export the store in there
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
