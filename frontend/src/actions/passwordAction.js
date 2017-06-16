import { get, post, _delete } from '../helper/api';

export const REQUEST_PASSWORD_START = "REQUEST_PASSWORD_START";
export const REQUEST_PASSWORD_SUCCESS = "REQUEST_PASSWORD_SUCCESS";
export const REQUEST_PASSWORD_FAIL = "REQUEST_PASSWORD_FAIL";

export const CREATE_PASSWORD_START = "CREATE_PASSWORD_START";
export const CREATE_PASSWORD_SUCCESS = "CREATE_PASSWORD_SUCCESS";
export const CREATE_PASSWORD_FAIL = "CREATE_PASSWORD_FAIL";

export const DELETE_PASSWORD_START = "DELETE_PASSWORD_START";
export const DELETE_PASSWORD_SUCCESS = "DELETE_PASSWORD_SUCCESS";
export const DELETE_PASSWORD_FAIL = "DELETE_PASSWORD_FAIL";

export const INPUT_TAG = "INPUT_TAG";
export const INPUT_URL = "INPUT_URL";
export const INPUT_NAME = "INPUT_NAME";
export const INPUT_PASSWORD = "INPUT_PASSWORD";
export const SHOW_DIALOG = "SHOW_DIALOG";
export const HIDE_DIALOG = "HIDE_DIALOG";

export const SHOW_PASSWORD = "SHOW_PASSWORD";
export const HIDE_PASSWORD = "HIDE_PASSWORD";

// 同步action
export function requestPasswordStart() {
  return {
    type: REQUEST_PASSWORD_START
  };
}

export function requestPasswordSuccess(dataSet) {
  return {
    type: REQUEST_PASSWORD_SUCCESS,
    dataSet,
  };
}

export function requestPasswordFail(msg) {
  return {
    type: REQUEST_PASSWORD_FAIL,
    msg: msg
  };
}

export function createPasswordStart() {
  return {
    type: CREATE_PASSWORD_START
  }
}

export function createPasswordSuccess(data) {
  return {
    type: CREATE_PASSWORD_SUCCESS,
    data
  }
}

export function createPasswordFail(msg) {
  return {
    type: CREATE_PASSWORD_FAIL,
    msg
  }
}

export function deletePasswordStart() {
  return {
    type: DELETE_PASSWORD_START
  }
}

export function deletePasswordSuccess(id) {
  return {
    type: DELETE_PASSWORD_SUCCESS,
    id
  }
}

export function deletePasswordFail() {
  return {
    type: DELETE_PASSWORD_FAIL
  }
}

export function inputTag(value) {
  return {
    type: INPUT_TAG,
    value
  }
}

export function inputUrl(value) {
  return {
    type: INPUT_URL,
    value
  }
}

export function inputName(value) {
  return {
    type: INPUT_NAME,
    value
  }
}

export function inputPassword(value) {
  return {
    type: INPUT_PASSWORD,
    value
  }
}

export function showDialog() {
  return {
    type: SHOW_DIALOG,
  }
}

export function hideDialog() {
  return {
    type: HIDE_DIALOG
  }
}

export function makePasswordVisible(id) {
  return {
    type: SHOW_PASSWORD,
    id
  }
}

export function makePasswordHidden(id) {
  return {
    type: HIDE_PASSWORD,
    id
  }
}

// 异步action

export function fetchPasswordDataSet() {
  return async function (dispatch) {
    dispatch(requestPasswordStart());
    try {
      let url = "http://localhost:10010/api/v1";
      const res = await get(url);
      dispatch(requestPasswordSuccess(res));
    } catch (err) {
      dispatch(requestPasswordFail(err));
    }
  };
}

export function createPassword(value) {
  return async function(dispatch, getState) {
    dispatch(hideDialog());
    dispatch(createPasswordStart());
    try {
      const url = "http://localhost:10010/api/v1";
      const params = {
        tag: getState().tag,
        url: getState().url,
        name: getState().name,
        password: getState().password
      }
      const res = await post(url, params);
      dispatch(createPasswordSuccess(res));
    } catch (err) {
      dispatch(createPasswordFail(err));
    }
  }
}

export function deletePassword(id) {
  return async function(dispatch, getState) {
    dispatch(deletePasswordStart());
    try {
      const url = `http://localhost:10010/api/v1/password/${id}`;
      const res = await _delete(url);
      dispatch(deletePasswordSuccess(id));
    } catch (err) {
      dispatch(deletePasswordFail(err));
    }
  }
}