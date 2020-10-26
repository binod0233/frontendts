import { createStore, applyMiddleware, combineReducers } from "redux";
import tokenReducer from "./reducer/tokenReducer";
import userReducer from "./reducer/userReducer";
import customerReducer from "./reducer/customerReducer";
const thunkMiddleware = require("redux-thunk").default;

const mainReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  customer: customerReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware));

export default store;
