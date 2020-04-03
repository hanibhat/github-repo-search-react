import { SEARCH_REPOSITORIES } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case SEARCH_REPOSITORIES:
      return action.payload
    default:
      return state
  }
} 