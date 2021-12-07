export const getOrders = (state) => state.orders;
export const getCheckedOrders = (state) => state.checkedOrders;
export const getOrdersLength = (state) => state.orders.length;
export const getIconsPositions = (state) => state.icons;
export const pagination = (state) => state.pagination;
export const getCurrentPage = (state) => state.pagination.currentPage;
export const getItemsPerPage = (state) => state.pagination.itemsCountPerPage;
export const getMaxPage = (state) =>
  Math.ceil(getOrdersLength(state) / pagination(state).itemsCountPerPage);

export const getOrdersList = (state) => {
  const orderList = getOrders(state);
  const start = (getCurrentPage(state) - 1) * getItemsPerPage(state);
  const end = getItemsPerPage(state) * getCurrentPage(state) - 1;
  const result = orderList.filter(
    (order) =>
      orderList.indexOf(order) >= start && orderList.indexOf(order) <= end
  );
  return result;
};

export const getFormOrder = (state) => state.form.order;
export const getFormVisible = (state) => state.form.isVisible;

export const getCheckedStatuses = (state) => state.dropdown;

export * as selectors from "./selectors";
