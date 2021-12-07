export const paginationActionTypes = {
  SET_CURRENT_PAGE: "PAGINATION.SET_CURRENT_PAGE",
};

export const paginationActions = {
  setCurrentPage: (page) => ({
    type: paginationActionTypes.SET_CURRENT_PAGE,
    page,
  }),
};
