import React , {memo, useState} from 'react';
import { Layout } from 'antd';
import styles from './index.module.scss' 
import AntdMenu from '@/component/antd-menu'
import AntdHeader from '@/component/antd-header'
import { useAppDispatch,useAppSelector } from '@/store'
import { IAccountInfo } from '@/service/types';
import { userSignInAction } from '@/store/user/thunk'
import { Outlet } from 'react-router-dom'
import Home from './home/index'
const { Header, Sider, Content } = Layout;
const Main: React.FC = memo(()=>{
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useAppDispatch()
  const { user:{key} } = useAppSelector((state)=>state)
  const data:IAccountInfo = {
    username:'admin',
    password:'admin'
  }
  const login = async ()=>{
    const res = await dispatch(userSignInAction(data))
    console.log(res)
  }
  return (
    <div className={styles.root}>
     <Layout className='layout'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
       <AntdMenu/>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
        <AntdHeader collapsed={collapsed} onChangeCollapsed={()=>setCollapsed(!collapsed)} />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
    </div>
  )
})
export default Main