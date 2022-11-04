import Request from './request';
import { BASE_URL, TIME_OUT } from './request/config';
const http = new Request({
   baseURL: BASE_URL,
   timeout: TIME_OUT,

   // 单个实例拦截器
   interceptors: {
    // 请求拦截
    requestInterceptors: (config) => {
      // const token = store.getState().user.authToken;
      // config.headers!.Authorization = `Bearer ${token}`;
      return config;
    },

    // 请求失败
    requestInterceptorsCatch: (err) => {
      return err;
    },

    // 响应拦截
    responseInterceptors: (res) => {
      return res;
    }

    // 响应失败拦截
    // responseInterceptorsCatch: (err) => {
    //   return err;
    // }
  }
})
export { http };