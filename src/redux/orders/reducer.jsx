import { ordersActionTypes } from "./actions";
import Mocks from "../../data/Orders.json";

const initialState = [...Mocks];

const sortByKey = (key, SortUp) => (a, b) => {
  return SortUp === true
    ? a[key] > b[key]
      ? 1
      : -1
    : a[key] < b[key]
    ? 1
    : -1;
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ordersActionTypes.SET_ORDERS:
      return (state = [...action.payload]);
    case ordersActionTypes.SEARCH_ORDERS:
      state = [...Mocks];
      return state.filter(
        (order) =>
          String(order.id).includes(action.payload) ||
          String(order.name).toLowerCase().includes(action.payload)
      );
    case ordersActionTypes.SORT_ORDERS:
      return state
        .slice()
        .sort(sortByKey(action.payload.value, action.payload.SortUp));
    case ordersActionTypes.DELETE_CHECKED_ORDERS:
      return state.filter((order) => !action.payload.includes(order.id));
    case ordersActionTypes.FILTER_ORDERS_BY_DATE:
      return state.filter(
        (order) =>
          new Date(order.creationDate) >= action.minDate &&
          new Date(order.creationDate) <= action.maxDate
      );
    case ordersActionTypes.FILTER_ORDERS_BY_SUM:
      return state.filter(
        (order) => order.sum >= action.minSum && order.sum <= action.maxSum
      );
    case ordersActionTypes.FILTER_ORDERS:
      return state.filter(
        (order) => order.id === action.payload || order.name === action.payload
      );
    case ordersActionTypes.FILTER_ORDERS_BY_STATUS:
      const result =
        action.status === ""
          ? [...state]
          : state.filter((order) => action.status.includes(order.status));
      return result;
    case ordersActionTypes.CHANGE_ORDER_STATUS:
      return state.map((order) =>
        order.id === action.payload.id
          ? { ...order, status: action.payload.status }
          : order
      );
    case ordersActionTypes.CHANGE_ORDER_NAME:
      return state.map((order) =>
        order.id === action.payload.id
          ? { ...order, name: action.payload.name }
          : order
      );
    case ordersActionTypes.CHANGE_GROUP_STATUS:
      const listId = action.payload;
      const status = action.status;
      return state.map((order) =>
        listId.includes(order.id) ? { ...order, status: status } : order
      );
    default:
      return state;
  }
};
