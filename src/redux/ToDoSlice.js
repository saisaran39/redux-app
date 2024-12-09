import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name:'toDoSlice',
    initialState: {
        toDoList: [],
        currentTask: ""
    },
    reducers: {
        setValue : (state, descObj)=> {
            state.currentTask = descObj.payload;
        },
        setList: (state) => {
            state.toDoList.push(state.currentTask);
            state.currentTask = ""
        }
    }
})

export default toDoSlice;