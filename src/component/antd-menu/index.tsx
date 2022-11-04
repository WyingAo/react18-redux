import React,{ memo, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {
  WindowsFilled,
  AndroidFilled,
  AppleFilled,
} from '@ant-design/icons';
import { Menu } from 'antd';
import styles from './index.module.scss'
import { setMenuKey } from '@/store/user'
import { useAppDispatch,useAppSelector} from '@/store'
const AntdMenu:React.FC = memo(()=>{
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {key} = useAppSelector((state)=>state.user)
  const setKey = (data:any)=>{
    navigate(data.key)
    dispatch(setMenuKey(data.key))

  }
  return (
   <div className={styles.root}>
       <div className="logo">
        <span>导航栏</span>
       </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/main']}
          selectedKeys={[key]}
          onSelect={setKey}
          items={[
            {
              key: '/main',
              icon: <AndroidFilled />,
              label: '首页',
            },
            {
              key: '/main/blog',
              icon: <AppleFilled />,
              label: '表格',
            },
            {
              key: '/main/system',
              icon: <WindowsFilled />,
              label: '组件',
            },
          ]}
        /></div>
  )
})
export default AntdMenu