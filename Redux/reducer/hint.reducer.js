import { OPEN_HNT } from "./../action/types";

const initialState = {
  hint: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_HNT:
      return {
        ...state,
        hint: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

export default reducer;
