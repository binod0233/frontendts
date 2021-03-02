import {
  FETCH_CTOKEN,
  ADD_CTOKEN,
  DELETE_CTOKEN,
} from "../action/customerType";

const initialState = {
  allCtokens: [],
  yourToken: NaN,
  action: "Click",
  totalToken: NaN,
};
const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CTOKEN:
      return {
        ...state,
        yourToken: action.payload,
      };
    case FETCH_CTOKEN:
      return {
        ...state,
        allCtokens: action.payload,
      };
    case DELETE_CTOKEN:
      return {
        ...state,
        // totalToken: action.payload,
      };

    default:
      return state;
  }
};

export default customerReducer;
