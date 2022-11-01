import React , {memo} from 'react';
import { Link, Outlet } from 'react-router-dom';
const Main: React.FC = memo(()=>{
  return (
    <>
    <h1>首页</h1>
    <ul>
      <li><Link to= '/main/blog'>blog</Link></li>
      <li><Link to= '/main/system'>system</Link></li>
    </ul>
    <Outlet />
    </>
  )
})

export default Main