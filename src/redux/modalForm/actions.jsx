export const formActionTypes = {
  SET_VISIBLE: "FORM.SET_VISIBLE",
  SET_ORDER: "FORM.SET_ORDER",
  CLEAR_ORDER: "FORM.CLEAR_ORDER",
};

export const formActions = {
  setVisible: () => ({
    type: formActionTypes.SET_VISIBLE,
  }),
  setOrder: (payload) => ({
    type: formActionTypes.SET_ORDER,
    payload,
  }),
  clearOrder: () => ({
    type: formActionTypes.CLEAR_ORDER,
  }),
};
