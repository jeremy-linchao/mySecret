import axios from 'axios';

async function get (url) {
  try {
    const response = await axios({
      url: url,
      method: "get",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    });
    if (response.status === 200 && response.data) {
      return response.data;
    }
  } catch (err) {
    throw new Error(`get error: ${err}`);
  }
}

async function post (url, params) {
  try {
    const response = await axios({
      url: url,
      method: "post",
      data: params,
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    });
    if (response.status === 201) {
      return response.data;
    }
  } catch (err) {
    throw new Error(`get error: ${err}`);
  }
}

async function _delete (url) {
  try {
    const response = await axios({
      url: url,
      method: "delete",
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    });
    if (response.status === 204) {
      return response.data;
    }
  } catch (err) {
    throw new Error(`get error: ${err}`);
  }
}

export { get, post, _delete };