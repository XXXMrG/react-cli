import { TEST } from '../actions'

const initialState = {
  userId: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        userId: action.userId,
      }
    default:
      return state
  }
}
