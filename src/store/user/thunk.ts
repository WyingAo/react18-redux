import { createAsyncThunk } from '@reduxjs/toolkit'
import { userSignIn,userInfo } from '@/service/user'
import { IAccountInfo } from '@/service/types';

const userSignInAction = createAsyncThunk('user/auth',async (data:IAccountInfo)=>{
  const res = await userSignIn(data)
  return res
})

const getUserInfo = createAsyncThunk('user/info',async ()=>{
   const res = await userInfo()
   return res
})

export {userSignInAction,getUserInfo}