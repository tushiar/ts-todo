import Input from './components/Input'
import Item from './components/Item'
import './App.css'
import { KeyboardEvent, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItems, itemsSelector, removeItem } from './redux/itemsSlice'
import { useSelector } from 'react-redux'


const initItems : string[] = []
function App() {

  const dispatch = useDispatch()
  const store = useSelector(itemsSelector)
  console.log(store.items)
  const onSubmit =(e: React.FormEvent <EventTarget>): void=>{
    const target = e.target as HTMLInputElement
    const event  = e as KeyboardEvent
    if(event.key==='Enter'){
      dispatch(addItems(target.value))
      target.value=""
    }
  }
  const onDelete=(idx: number)=>{
    console.log(idx)
    dispatch(removeItem(idx))
  }
  return (
    <div className="App">
      <Input onSubmit={onSubmit}/>
      <div className='item-container'>
        {store.items.map((item, idx)=> <Item item={item} idx={idx} onDel={onDelete}/>)}
      </div>
    </div>
  )
}

export default App
