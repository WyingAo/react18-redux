import React ,{ memo } from 'react'
import { Link, Outlet }  from 'react-router-dom'
const Blog:React.FC = memo(()=>{
  return (
  <div className='blog'>
  <Outlet></Outlet>
  </div>
)
})
export default Blog