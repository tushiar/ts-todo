import  { FC, MouseEvent } from 'react'
import styles from './index.module.css'
import { TItem } from './type'

type tItemProps={
  item: string,
  onDel: ( idx: number)=> void,
  idx: number
}
const Item:  FC<tItemProps>= ({item, onDel, idx}) => {
  return (
    <div className={styles.item}>
      {item}&nbsp;
      <button className={styles.delBtn} onClick={()=>onDel(idx)}>-</button>
    </div>
  )
}

export default Item
