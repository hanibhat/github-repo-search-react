import { FETCH_BOOKMARKS, BOOKMARK_REPO, REMOVE_BOOKMARK } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKMARKS:
      return action.payload
    case BOOKMARK_REPO:
      return action.payload
    case REMOVE_BOOKMARK:
      return action.payload
    default:
      return state
  }
} 