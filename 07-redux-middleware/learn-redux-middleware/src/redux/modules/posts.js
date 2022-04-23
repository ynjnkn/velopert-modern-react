import * as postsAPI from "../../apis/posts";

/* Initial State */
const initialState = {
  posts: {
    loading: false,
    data: null,
    error: null,
  },
  post: {
    loading: false,
    data: null,
    error: null,
  },
};

/* Action Types */
const GET_POSTS = "GET_POSTS"; // 요청 시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; // 요청 성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR"; // 요청 실패

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

/* Action Creators */
export const getPosts = () => ({ type: GET_POSTS });
export const getPostsSuccess = (posts) => ({ type: GET_POSTS_SUCCESS, posts });
export const getPostsError = (error) => ({ type: GET_POSTS_ERROR, error });
export const getPost = () => ({ type: GET_POST });
export const getPostSuccess = (post) => ({ type: GET_POST_SUCCESS, post });
export const getPostError = (error) => ({ type: GET_POST_ERROR, error });

/* Middlewares */
export const getPostsMiddleware = () => async (dispatch) => {
  try {
    dispatch(getPosts());
    const posts = await postsAPI.getPosts();
    dispatch(getPostsSuccess(posts));
  } catch (e) {
    dispatch(getPostsError(e));
  }
};
export const getPostMiddleware = (id) => async (dispatch) => {
  try {
    dispatch(getPost());
    const post = await postsAPI.getPostById(id);
    dispatch(getPostSuccess(post));
  } catch (e) {
    dispatch(getPostError(e));
  }
};

/* Reducer */
export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: {
          loading: true, // 로딩 시작
          data: null,
          error: null,
        },
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          loading: false, // 로딩 종료
          data: action.posts, // posts 불러오기 성공
          error: null,
        },
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: {
          loading: false, // 로딩 종료
          data: null, // posts 불러오기 실패
          error: action.error, // 생성된 에러 출력
        },
      };
    case GET_POST:
      return {
        ...state,
        post: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: {
          loading: false,
          data: action.post,
          error: null,
        },
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
