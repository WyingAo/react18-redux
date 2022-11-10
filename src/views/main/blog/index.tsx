import React ,{ memo } from 'react'
import styles from './index.module.scss'
import { Space, Table, Tag,Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import AntdTable from '@/component/antd-table/index'
import { ITableConfig } from '@/component/antd-table/types';
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const Blog:React.FC = memo(()=>{
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  const tablePageConfig:ITableConfig<DataType>= {
     columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
          <>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </Space>
        ),
      },
      {
        title: '操作',
        key: 'caozuo',
        render: (_, record) => (
          <Space size="middle">
            <Button>编辑</Button>
            <Button>删除</Button>
          </Space>
        ),
      }
     ],
    tablleConfig:{
      titile:'表格封装',
      bordered:true,
      size:'small'
    }
  }
  return (
  <div className={styles.root}>
  <AntdTable tableConfig={tablePageConfig} dataSource={data} />
  </div>
)
})
export default Blog