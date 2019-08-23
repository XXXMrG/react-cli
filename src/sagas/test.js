import { put, takeEvery, takeLatest, call } from 'redux-saga/effects'
import { test } from '../api'
import * as types from '../actions'

function* asyncTest(action) {
  const { payload } = action
  try {
    const result = yield call(test.test, payload)
    console.log(result)
  } catch (e) {
    console.error(e)
  }
}
// export a watcher array to root to use all()
export default [takeLatest(types.ASYNCTEST, asyncTest)]
