import { createSlice,PayloadAction  } from '@reduxjs/toolkit'
import { userSignInAction } from './thunk'
const userSlice = createSlice({
  name: 'user',
  initialState:{
    loginStatus: true, // 登录状态
    authToken: '', // token
    userInfo: {}, // 当前登录用户的信息
    loading: false, // 是否处于请求加载
    menuList: [], // 当前用户拥有的菜单权限列表
    sideMenuList: [], // 侧边栏菜单数据
    userListData: [], // 用户列表数据 
    key:'/main'
  },
  reducers:{
    // 设置token
    setAuToken:(state,action:PayloadAction<string>)=>{
      state.authToken = action.payload
    },
    // 当前导航栏的key
    setMenuKey:(state,action:PayloadAction<string>)=>{
      state.key = action.payload
    }
  },
    // 异步reducer
    extraReducers:(builder)=>{
      builder.addCase(userSignInAction.fulfilled,(state,action)=>{
        if(action.payload.code === 200 ) {
          state.authToken = action.payload.data.token
        }
      });
    }
})

export { userSignInAction }
export const { setAuToken,setMenuKey } = userSlice.actions
export default userSlice.reducer