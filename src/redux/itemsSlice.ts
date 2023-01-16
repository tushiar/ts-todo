import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ItemsState ={
    items: string[]
}
const initialState: ItemsState= {
    items: ["hello there"]
}

const itemsSlice= createSlice({
    name: "itemsReducer",
    initialState,
    reducers:{
        addItems: (state, {payload}: PayloadAction<string>): void=>{
            state.items = [...state.items, payload] 
        },
        removeItem : (state, {payload} : PayloadAction<number>):void=>{
            state.items = [...state.items].filter((item,idx)=> idx!==payload)
        }

    }
})

export const {addItems, removeItem} = itemsSlice.actions
export default itemsSlice.reducer
export const itemsSelector = (state: {items: ItemsState })=> state.items