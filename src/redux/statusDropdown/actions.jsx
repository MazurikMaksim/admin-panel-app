export const dropdownActionTypes = {
  SET_STATUSES: "DROPDOWN_ACTIONS.SET_STATUSES",
  CLEAR_STATUSES: "DROPDOWN_ACTIONS.CLEAR_STATUSES",
};

export const dropdownActions = {
  setStatuses: (status) => ({
    type: dropdownActionTypes.SET_STATUSES,
    status,
  }),
  clearStatuses: () => ({
    type: dropdownActionTypes.CLEAR_STATUSES,
  }),
};
