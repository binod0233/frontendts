import { FETCH_TOKEN, UPDATE_TOKEN } from "../action/tokenType";

const initialState = {
  allTokens: [],

  action: "Click",
  totalToken: NaN,
};
const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOKEN:
      return {
        ...state,
        allTokens: action.payload,
      };
    case UPDATE_TOKEN:
      return {
        ...state,
        totalToken: action.payload,
      };

    default:
      return state;
  }
};

export default tokenReducer;
