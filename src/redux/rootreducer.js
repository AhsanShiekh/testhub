import { combineReducers } from "redux";
import blogsReducer from "./Blogs/Blogs.reducer";
import alertReducer from "./Alert/Alert.reducer";

const rootReducer = combineReducers({
  blogs: blogsReducer,
  alert: alertReducer,
});

export default rootReducer;
