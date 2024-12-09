import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name:'counterSlice',
    initialState:{
        count:5,
        val : 1
    },
    reducers:{
      increment:(state)=>{
        state.count+=parseInt(state.val);
      },
      decrement:(state)=>{
        state.count-=state.val;
      },
      handleValue: (state, testVal) => {
        state.val = testVal.payload
      }
    }
});

export default counterSlice;
