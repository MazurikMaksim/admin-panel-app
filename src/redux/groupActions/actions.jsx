export const checkedOrdersActionTypes = {
  SET_CHECKED_ORDERS: "GROUP_ACTIONS.SET_CHECKED_ORDERS",
  DELETE_CHECKED_ORDERS: "GROUP_ACTIONS.DELETE_CHECKED_ORDERS",
  CLEAR_CHECKED_ORDERS: "GROUP_ACTIONS.CLEAR_CHECKED_ORDERS",
  SET_ALL_CHECKED_ORDERS: "GROUP_ACTIONS.SET_ALL_CHECKED_ORDERS",
};

export const checkedOrdersActions = {
  setCheckedOrders: (id) => ({
    type: checkedOrdersActionTypes.SET_CHECKED_ORDERS,
    id,
  }),
  deleteCheckedOrders: (payload) => ({
    type: checkedOrdersActionTypes.DELETE_CHECKED_ORDERS,
    payload,
  }),
  clearCheckedOrders: () => ({
    type: checkedOrdersActionTypes.CLEAR_CHECKED_ORDERS,
  }),
  setAllCheckedOrders: (payload) => ({
    type: checkedOrdersActionTypes.SET_ALL_CHECKED_ORDERS,
    payload,
  }),
};
