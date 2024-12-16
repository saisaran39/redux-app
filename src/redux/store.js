import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './CounterSlice';
import todoSlice from "./ToDoSlice";
import userSlice from "./UserSlice";

// console.log(counterSlice);

const store = configureStore({
    reducer:{
        counterState:counterSlice.reducer,
        todoState: todoSlice.reducer,
        userState: userSlice.reducer
    }
})

export default store;