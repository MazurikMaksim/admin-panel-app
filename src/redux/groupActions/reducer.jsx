import { checkedOrdersActionTypes } from "./actions";

const initialState = [];

export const checkedOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case checkedOrdersActionTypes.SET_CHECKED_ORDERS:
      return [...state, ...action.id];
    case checkedOrdersActionTypes.DELETE_CHECKED_ORDERS:
      return state.filter((item) => !action.payload.includes(item));
    case checkedOrdersActionTypes.CLEAR_CHECKED_ORDERS:
      return (state = []);
    case checkedOrdersActionTypes.SET_ALL_CHECKED_ORDERS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
