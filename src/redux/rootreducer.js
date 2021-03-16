import { combineReducers } from "redux";
import blogsReducer from "./Blogs/Blogs.reducer";

const rootReducer = combineReducers({
  blogs: blogsReducer,
});

export default rootReducer;
