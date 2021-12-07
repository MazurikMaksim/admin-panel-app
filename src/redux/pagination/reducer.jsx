import { paginationActionTypes } from "./actions";

const initialState = {
  currentPage: 1,
  itemsCountPerPage: 10,
};

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case paginationActionTypes.SET_CURRENT_PAGE:
      const result =
        action.page === state.currentPage && action.page > 1
          ? { ...state, currentPage: action.page - 1 }
          : { ...state, currentPage: action.page };
      return result;
    default:
      return state;
  }
};
