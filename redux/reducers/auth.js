import {
  AUTH_SET_ITEM,
  AUTH_CLEAR_ITEM,
  AUTH_SHOW_LOADER,
  AUTH_HIDE_LOADER,
} from "@/configs/action";

const INIT_STATE = {
  loader: false,
  me: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case AUTH_SET_ITEM:
      return { ...state, [action.payload.key]: action.payload.val };
    case AUTH_CLEAR_ITEM:
      return { ...state, [action.payload.key]: null };

    case AUTH_SHOW_LOADER:
      return { ...state, loader: true };

    case AUTH_HIDE_LOADER:
      return { ...state, loader: false };
    default:
      return state;
  }
};
