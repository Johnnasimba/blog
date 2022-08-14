import jsonPlaceholder from "../apis/jsonPlaceholder"

export const fetchPost = () => {

  const response =    jsonPlaceholder.get('/posts')

  return {
    type: 'FETCH_POSTS',
    payload: response
  }
}