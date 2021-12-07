export const ordersActionTypes = {
  SET_ORDERS: "ORDERS.SET_ORDERS",
  CHANGE_ORDER_STATUS: "ORDERS.CHANGE_ORDER_STATUS",
  CHANGE_ORDER_NAME: "ORDERS.CHANGE_ORDER_NAME",
  SEARCH_ORDERS: "ORDERS.SEARCH_ORDERS",
  SORT_ORDERS: "ORDERS.SORT_ORDERS",
  DELETE_CHECKED_ORDERS: "ORDERS.DELETE_CHECKED_ORDERS",
  FILTER_ORDERS_BY_DATE: "ORDERS.FILTER_ORDERS_BY_DATE",
  FILTER_ORDERS_BY_SUM: "ORDERS.FILTER_ORDERS_BY_SUM",
  FILTER_ORDERS_BY_STATUS: "ORDERS.FILTER_ORDERS_BY_STATUS",
  FILTER_ORDERS: "ORDERS.FILTER_ORDERS",
  CHANGE_GROUP_STATUS: "ORDERS.CHANGE_GROUP_STATUS",
};

export const ordersActions = {
  setOrders: (payload) => ({
    type: ordersActionTypes.SET_ORDERS,
    payload,
  }),
  searchOrders: (payload) => ({
    type: ordersActionTypes.SEARCH_ORDERS,
    payload,
  }),
  changeOrderStatus: (payload) => ({
    type: ordersActionTypes.CHANGE_ORDER_STATUS,
    payload,
  }),
  changeOrderName: (payload) => ({
    type: ordersActionTypes.CHANGE_ORDER_NAME,
    payload,
  }),
  sortOrders: (payload) => ({
    type: ordersActionTypes.SORT_ORDERS,
    payload,
  }),
  deleteCheckedOrders: (payload) => ({
    type: ordersActionTypes.DELETE_CHECKED_ORDERS,
    payload,
  }),
  filterOrdersByDate: (minDate, maxDate) => ({
    type: ordersActionTypes.FILTER_ORDERS_BY_DATE,
    minDate,
    maxDate,
  }),
  filterOrdersBySum: (minSum, maxSum) => ({
    type: ordersActionTypes.FILTER_ORDERS_BY_SUM,
    minSum,
    maxSum,
  }),
  filterOrdersByStatus: (status) => ({
    type: ordersActionTypes.FILTER_ORDERS_BY_STATUS,
    status,
  }),
  filterOrders: (payload) => ({
    type: ordersActionTypes.FILTER_ORDERS,
    payload,
  }),
  changeGroupStatus: (payload, status) => ({
    type: ordersActionTypes.CHANGE_GROUP_STATUS,
    payload,
    status,
  }),
};
