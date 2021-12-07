import { iconsActionTypes } from "./actions";

const initialState = {
  creationDate: false,
  status: false,
  positionsCount: false,
  sum: false,
};

export const iconsReducer = (state = initialState, action) => {
  switch (action.type) {
    case iconsActionTypes.ROTATE_ICON:
      const value = action.payload;
      return { ...state, [value]: !state[value] };
    case iconsActionTypes.REFRESH_ICON:
      return {
        ...state,
        creationDate: false,
        status: false,
        positionsCount: false,
        sum: false,
      };
    default:
      return state;
  }
};
