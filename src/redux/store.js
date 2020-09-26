import { createStore, applyMiddleware, combineReducers } from "redux";
import tokenReducer from "./reducer/tokenReducer";
const thunkMiddleware = require("redux-thunk").default;

const mainReducer = combineReducers({
  token: tokenReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware));

export default store;
