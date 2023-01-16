import React, {MouseEvent,KeyboardEvent, FC, forwardRef} from 'react'
import styles from './index.module.css'

type Props ={
  onSubmit: (e: KeyboardEvent<HTMLInputElement>)=> void,
}
const Input : FC<Props> =( { onSubmit }  ): JSX.Element => {
  return (
    <div className={styles.inputContainer}>
      <input className={styles.inputField} type="text" name="desc" placeholder='Please enter description' onKeyUp={onSubmit}/>
    </div>
  )
}

export default Input
