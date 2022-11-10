import React,{ memo } from "react";
interface IProps {
  title:string
}
const TableHeader: React.FC<IProps> = memo((props:IProps)=>{
  const { title } = props
  return <span> {title} </span>
})

export default TableHeader