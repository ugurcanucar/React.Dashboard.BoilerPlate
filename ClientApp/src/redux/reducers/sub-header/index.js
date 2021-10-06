import { SET_PAGE_BUTTONS, SET_PAGE_OPTIONS } from "../../constants/sub-header";

const initState = {
  pageSettings: [],
};

const subheader = (state = initState, action) => {
  switch (action.type) {
    case SET_PAGE_OPTIONS:
      return {
        ...state,
        pageSettings: action.pageSettings,
      };
    case SET_PAGE_BUTTONS:
      return {
        ...state,
        pageButtons: action.pageButtons,
      };

    default:
      return state;
  }
};

export default subheader;
