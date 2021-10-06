import { SET_PAGE_BUTTONS, SET_PAGE_OPTIONS } from "../../constants/sub-header";

export const setPageSettings = (pageSettings) => {
  return {
    type: SET_PAGE_OPTIONS,
    pageSettings,
  };
};

export const setPageButtons = (pageButtons) => {
  return {
    type: SET_PAGE_BUTTONS,
    pageButtons,
  };
};
