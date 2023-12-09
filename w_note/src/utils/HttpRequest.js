import  axios  from 'axios';
import Qs from 'qs';

const baseURL = 'http://localhost';

const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

// instance.defaults.baseURL = 'http://localhost';
/**
 * 超时时间
 */
// instance.defaults.timeout = 30 * 100;

export const get = (url) => {
  return (params = {}, config = {}) => {
    return instance.get(url, {
      params: { ...params },
      paramsSerializer: (x) =>
        Qs.stringify(x, {
          arrayFormat: "brackets",
        }),
      config,
    })
  }
}

export const post = (url) => {
  return (data = {}, config = {}) => {
    return instance.post(url, {
      data: { ...data },
      config,
    })
  }
}

