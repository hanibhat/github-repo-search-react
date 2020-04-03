import { combineReducers } from 'redux';
import bookmarksReducer from './bookmarksReducer'
import repositoriesReducer from './repositoriesReducer'

// combine both reducers and assign meaningful names
const allReducers = combineReducers({
  repositories: repositoriesReducer,
  bookmarks: bookmarksReducer
});

export default allReducers;