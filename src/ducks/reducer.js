import axios from "axios";

const TEST = "TEST";
const GET_ALL_POSTS = "GET_ALL_POSTS";
const GET_USER = "GET_USER";
const POST = "POST";
const GET_CATEGORIES = "GET_CATEGORIES";
const LOGOUT = "LOGOUT";
const GET_USER_INTERESTS = "GET_USER_INTERESTS";
const ADD_USER_INTEREST = "ADD_USER_INTEREST";
const REMOVE_USER_INTEREST = "REMOVE_USER_INTEREST";
const GET_ALL_POST_CATEGORY = "GET_ALL_POST_CATEGORY";
const ADD_TO_READING_LIST = "ADD_TO_READING_LIST";
const GET_READING_LIST = "GET_READING_LIST";

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
export function getCategories() {
  return {
    type: GET_CATEGORIES,
    payload: axios
      .get("/api/categories")
      //Bring back category array, sorted by id number, so its consistant every time
      .then(response => response.data.sort((a, b) => a.id - b.id))
      .catch(() => [])
  };
}

export function logOut() {
  return {
    type: "LOGOUT",
    payload: axios
      .get("/api/logout")
      .then(response => {
        return response;
      })
      .catch(console.log)
  };
}
//This hasn't been fully set up in the switch statement or initialstate
export function getUserInterests(userId) {
  return {
    type: GET_USER_INTERESTS,
    payload: axios
      .get(`/api/interests/${userId}`)
      .then(response => {
        return response.data;
      })
      .catch(() => [])
  };
}
export function addUserInterest(userid, category) {
  return {
    type: ADD_USER_INTEREST,
    payload: axios
      .post(`/api/userinterest`, { userid: userid, category: category })
      .then(response => response.data)
      .catch(() => [])
  };
}
export function removeUserInterest(userid, category) {
  return {
    type: REMOVE_USER_INTEREST,
    payload: axios
      .delete(`/api/userinterest/${userid}/${category}`)
      .then(response => response.data)
      .catch(() => [])
  };
}
export function getAllPostCategory(categoryId) {
  return {
    type: GET_ALL_POST_CATEGORY,
    payload: axios
      .get(`/api/category/${categoryId}`)
      .then(response => {
        return response.data;
      })
      .catch(() => [])
  };
}
export function addToReadingList(userid, id){
  return{
    type: ADD_TO_READING_LIST,
    payload: axios
    .post(`http://localhost:3005/api/addreadinglist`,{ userid , id })
    .then(response => {
      console.log("this is the response:",response.data)
      return response.data;
    })
    .catch(()=>[])
  }
}

export function getReadingList(userid){
  return {
    type: GET_READING_LIST,
    payload: axios
    .get(`/api/readinglist/${userid}`)
    .then(response =>{
      return response.data
    })
    .catch(()=>[])
  }
}

const initialState = {
  user: {},
  userInterests: [],
  categories: [],
  posts: [],
  readingList:[]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_ALL_POST_CATEGORY}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_ALL_POST_CATEGORY}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        posts: action.payload
      });
    case `${GET_ALL_POST_CATEGORY}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${REMOVE_USER_INTEREST}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${REMOVE_USER_INTEREST}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        userInterests: action.payload
      });
    case `${REMOVE_USER_INTEREST}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${GET_USER_INTERESTS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_USER_INTERESTS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        userInterests: action.payload
      });
    case `${GET_USER_INTERESTS}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${ADD_USER_INTEREST}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${ADD_USER_INTEREST}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        userInterests: action.payload
      });
    case `${ADD_USER_INTEREST}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${GET_CATEGORIES}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_CATEGORIES}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        categories: action.payload
      });
    case `${GET_CATEGORIES}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
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
    case `${LOGOUT}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });

    case `${LOGOUT}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${LOGOUT}_FULFILLED`:
      return Object.assign({}, state, {
        user: {}
      });
    case `${ADD_TO_READING_LIST}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });

    case `${ADD_TO_READING_LIST}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${ADD_TO_READING_LIST}_FULFILLED`:
      return Object.assign({}, state, {
        
      }); 
    case `${GET_READING_LIST}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });

    case `${GET_READING_LIST}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GET_READING_LIST}_FULFILLED`:
      return Object.assign({}, state, {
        readingList: action.payload
      }); 

    default:
      return state;
  }
}
