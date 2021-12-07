import { dropdownActionTypes } from "./actions";

const initialState = [];

export const dropdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case dropdownActionTypes.SET_STATUSES:
      const status = action.status;
      const result = state.includes(status)
        ? state.filter((item) => item !== status)
        : [...state, action.status];
      return result;
    case dropdownActionTypes.CLEAR_STATUSES:
      return (state = []);
    default:
      return state;
  }
};
