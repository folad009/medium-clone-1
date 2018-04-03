import axios from "axios";

const TEST = "TEST";
const GET_ALL_POSTS = "GET_ALL_POSTS";
const GET_USER = "GET_USER";
const POST = "POST";

export function getAllPosts() {
  return {
    type: GET_ALL_POSTS,
    payload: axios
      .get("/api/posts")
      .then(response => response.data)
      .catch(() => [])
  };
}
export function getUser() {
  return {
    type: GET_USER,
    payload: axios
      .get("/api/user")
      .then(response => response.data[0])
      .catch(() => [])
  };
}

const initialState = {
  user: {},
  posts: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_USER}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      });
    case `${GET_USER}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${GET_ALL_POSTS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_ALL_POSTS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        posts: action.payload
      });
    case `${GET_ALL_POSTS}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    default:
      return state;
  }
}
