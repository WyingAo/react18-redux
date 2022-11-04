import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import userReducer from './user'

const store = configureStore({
  reducer:{
    user:userReducer
  },
  devTools:true
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
// hooks
export const useAppDispatch : ()=>AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
