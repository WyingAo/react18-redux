import React,{ useEffect } from 'react'
import { useLocation,useRoutes } from 'react-router-dom'
const RouterGurad = (props:any)=>{
  const  {routes}  = props
  
  const Route = useRoutes(routes)

  return <>{Route}</>
}
export default RouterGurad