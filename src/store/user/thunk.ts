import { createAsyncThunk } from '@reduxjs/toolkit'
import { userSignIn } from '@/service/user'
import { IAccountInfo } from '@/service/types';

const userSignInAction = createAsyncThunk('user/auth',async (data:IAccountInfo)=>{
  const res = await userSignIn(data)
  return res
})

export {userSignInAction}