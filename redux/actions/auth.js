import {
  AUTH_CLEAR_ITEM,
  AUTH_SET_ITEM,
  AUTH_HIDE_LOADER,
  AUTH_SHOW_LOADER,
} from "@/configs/actions";

export const login = async ({ email, password }) => {};

export const register = async ({ email, password }) => {};

export const logout = async () => {};

export const showLoader = () => {
  return {
    type: AUTH_SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: AUTH_HIDE_LOADER,
  };
};

export const setItem = (key, val) => {
  return {
    type: AUTH_SET_ITEM,
    payload: { key: key, val: val },
  };
};

export const clearItem = (key) => {
  return { type: AUTH_CLEAR_ITEM, payload: { key: key } };
};
