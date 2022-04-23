import { combineReducers } from "redux";
import counter from "./counter";
import posts from "./postsRefactored";

const rootReducer = combineReducers({ counter, posts });

export default rootReducer;
