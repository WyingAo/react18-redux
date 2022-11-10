import type { ColumnsType } from 'antd/es/table';
import { ReactNode } from 'react';
type SizesType = 'small' | 'middle' | 'large' ;

interface ITableConfig<T> {
  tablleConfig:{titile:string,bordered?:boolean,size?:SizesType};
  columns:ColumnsType<T>
}

interface IDataType extends Object {
  key:string;
  title:string;
  dataIndex:string;
  render?:ReactNode
}

export type { ITableConfig,IDataType }