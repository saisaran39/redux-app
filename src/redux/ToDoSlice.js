import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoslice',
    initialState: {
        todoList: [],
        value: ""
    },
    reducers: {
        setValue: (state, descObj) => {
            debugger
            state.value = descObj.payload
        },
        updatedList: (state) => {
            state.todoList.push(state.value);
            state.value = ""
        }
    }
})

export default todoSlice;