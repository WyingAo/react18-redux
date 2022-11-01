import React ,{ memo } from 'react'
import { Outlet }  from 'react-router-dom'
const Blog:React.FC = memo(()=>{
  return (
  <div className='system'>
  <Outlet></Outlet>
  </div>
)
})
export default Blog