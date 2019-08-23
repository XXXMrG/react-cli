import login from './test'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([...login])
}
