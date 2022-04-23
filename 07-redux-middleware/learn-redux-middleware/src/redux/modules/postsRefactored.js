import * as postsAPI from "../../apis/posts";
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from "../../lib/asyncUtils";

/* Initial State */
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

/* Action Types */
const GET_POSTS = "GET_POSTS"; // 요청 시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; // 요청 성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR"; // 요청 실패
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

/* Action Creators */
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);

/* Reducer */
export default function posts(state = initialState, action) {
  console.log({ action });
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      const postsReducer = handleAsyncActions(GET_POSTS, "posts");
      return postsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      const postReducer = handleAsyncActions(GET_POST, "post");
      return postReducer(state, action);
    default:
      return state;
  }
}
