import React,{memo} from 'react'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { useAppDispatch,useAppSelector } from '@/store';
import { setMenuKey } from '@/store/user'
import styles from './index.module.scss'
interface IProps {
  collapsed:boolean
  onChangeCollapsed:() => void
}
const AntdHeader: React.FC<IProps> = memo((props)=>{
  const items = [
    {
      key:'/main/home',
      path:'/main/home',
      lable:'Home'
    },
    {
      key:'/main/blog',
      path:'/main/blog',
      lable:'Blog'
    },
    {
      key:'/main/system',
      path:'/main/system',
      lable:'System'
    }
  ]
  const dispatch = useAppDispatch()
  const setKey=(key:string)=>{
    dispatch(setMenuKey(key))
    localStorage.setItem('itemKey',key)
  }
  const key = localStorage.getItem('itemKey')
  return (
    <div className={styles.root}>
      {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () =>props.onChangeCollapsed(),
          })}
          <Breadcrumb>
          {items.map(item=>{
            return (
              <Breadcrumb.Item className={key===item.key?'active':''}  key={item.key} onClick={()=>setKey(item.key)}>
               <Link to={item.path}>{item.lable}</Link>
              </Breadcrumb.Item>
            )
          })}
          </Breadcrumb>
    </div>
  )
})

export default AntdHeader