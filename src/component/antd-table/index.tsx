import React from 'react';
import { Table } from 'antd';
import { ITableConfig } from './types'
import TableHeader from './header'

interface Props<T> {
  tableConfig:ITableConfig<T>;
  dataSource:T[]
}

const AntdTable = <T extends {} >(props:Props<T>)=>{
   const { tableConfig,dataSource } = props
   const { tablleConfig,columns } = tableConfig
   return (
    <Table 
    columns={columns}
    dataSource={dataSource}
    bordered={tablleConfig.bordered}
    size={tablleConfig.size}
    title={()=><TableHeader title={tablleConfig.titile} />}
    footer={()=>'Footer'}
    />
   )
}

export default AntdTable