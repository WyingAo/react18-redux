import React,{ lazy,Suspense }  from 'react'
import Main from '@/views/main'
import {RouteObject} from './types'
import { Navigate } from 'react-router-dom'
// 懒加载方法
const LazyLoad = (path:string) => {
     const Comonent = lazy(()=>import(`@/views${path}`))
     return (
      <Suspense fallback = {<div>Loding...</div>}>
          <Comonent/>
      </Suspense>
     )
}
const routes:RouteObject[] = [
  {
     path:'/',
     element:<Navigate to='/main'/>
  },
  {
     path:'/main',
     element:<Main/>,
     children:[
       {
          path:'/main/blog',
          element:LazyLoad('/main/blog'),
       },
       {
          path:'/main/system',
          element:LazyLoad('/main/system'),
       }
     ]
  },
  {
     path:'/login',
     element:LazyLoad('/login')
  },
  {
     path: '*',
     element: LazyLoad('/not-found')
   }
]
export { routes }