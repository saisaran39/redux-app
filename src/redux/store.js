import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './CounterSlice';
import toDoSlice from "./ToDoSlice";

// console.log(counterSlice);

const store = configureStore({
    reducer:{
        counterState:counterSlice.reducer,
        toDoState: toDoSlice.reducer
    }
})

export default store;