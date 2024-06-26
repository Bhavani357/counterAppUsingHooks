import {createSlice, configureStore} from '@reduxjs/toolkit'


const addSlice = createSlice({
    name:"add",
    initialState:[],
    reducers:{
        addRow:(state,action)=>{
            state.push(action.payload)
        }
    }
})

const store = configureStore({
    reducer:{
        add: addSlice.reducer
    }
})
export default store
export const {addRow} = addSlice.actions