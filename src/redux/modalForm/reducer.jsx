import { formActionTypes } from "./actions";

const initialState = {
  isVisible: false,
  order: null,
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case formActionTypes.SET_VISIBLE:
      return { ...state, isVisible: !state.isVisible };
    case formActionTypes.SET_ORDER:
      return { ...state, order: action.payload };
    case formActionTypes.CLEAR_ORDER:
      return { ...state, order: null };
    default:
      return state;
  }
};
