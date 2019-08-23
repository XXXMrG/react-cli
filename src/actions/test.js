import * as types from './index'

export const test = userId => ({
  type: types.TEST,
  userId,
})

export const asyncTest = payload => ({
  type: types.ASYNCTEST,
  payload,
})
