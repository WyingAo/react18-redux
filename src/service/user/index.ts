import { http } from "../index";
import { IAccountInfo, IResponseData } from '../types';

// 登录
const userSignIn = async (data:IAccountInfo):Promise<IResponseData>=>{
  return http.request({
    url:'/auth',
    method:'post',
    data,
    loading:true,
    message:true
  })
}

export { userSignIn }