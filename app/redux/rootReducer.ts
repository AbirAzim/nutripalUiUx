import { combineReducers } from "redux";
import mainSideBarReducer from "./slices/mainSideBarSlice";

const rootReducer = combineReducers({
  mainSideBar: mainSideBarReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
