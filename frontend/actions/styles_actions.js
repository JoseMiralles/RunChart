
export const SET_MAIN_COLOR = "SET_MAIN_COLOR";
export const SET_IS_MOBILE = "SET_IS_MOBILE";

export const setMainColorAction = (color) => ({
    type: SET_MAIN_COLOR,
    color
});

export const setIsMobileAction = (isMobile) => ({
    type: SET_IS_MOBILE,
    isMobile
});

export const setMainColor = (color) => (dispatch) =>
    dispatch(setMainColorAction(color));

export const setIsMobile = (isMobile) => (dispatch) =>
    dispatch(setIsMobileAction(isMobile));