export const iconsActionTypes = {
  ROTATE_ICON: "ICONS.ROTATE_ICON",
  REFRESH_ICON: "ICONS.REFRESH_ICON",
};

export const iconsActions = {
  rotateIcon: (payload) => ({
    type: iconsActionTypes.ROTATE_ICON,
    payload,
  }),
  refreshIcon: () => ({
    type: iconsActionTypes.REFRESH_ICON,
  }),
};
