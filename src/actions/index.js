import Axios from "axios"
import { SEARCH_REPOSITORIES, FETCH_BOOKMARKS, BOOKMARK_REPO, REMOVE_BOOKMARK } from './types'
import { REPOS_API, BOOKMARK_API } from './apis'

/**
 * @description calls the search API and stores the returned array in repositories reducer
 * @param {string} query
 */
export const searchRepositories = query => dispatch => {
  Axios.get(`${REPOS_API}/search/?q=${query}`)
    .then(res => {
      return res.data;
    }).then(repos => dispatch({
      type: SEARCH_REPOSITORIES,
      payload: repos
    })).catch(err => alert(err))
}

/**
 * @description calls the bookmarks API and stores the returned array in bookmarks reducer
 */
export const fetchBookmarks = () => dispatch => {
  Axios.get(`${BOOKMARK_API}`)
    .then(res => dispatch({
      type: FETCH_BOOKMARKS,
      payload: res.data
    })).catch(err => alert(err))
}

/**
 * @description calls the bookmarks API, POSTS the repository as a new bookmark and stores the returned array in bookmarks reducer
 * @param {string} id The ID of the repository which will be added to the bookmarks array
 */
export const bookmarkRepository = id => dispatch => {
  Axios.post(`${BOOKMARK_API}/${id}`)
    .then(res => {
      return res.data;
    }).then(repo => dispatch({
      type: BOOKMARK_REPO,
      payload: repo
    })).catch(err => alert(err))
}

/**
 * @description calls the bookmarks API, removes the repository from bookmarks array and stores the returned array in bookmarks reducer
 * @param {string} id The ID of the repository to remove from bookmarks array
 */
export const removeBookmark = id => dispatch => {
  Axios.delete(`${BOOKMARK_API}/${id}`)
    .then(res => {
      return res.data;
    }).then(repos => dispatch({
      type: REMOVE_BOOKMARK,
      payload: repos
    })).catch(err => alert(err))
}