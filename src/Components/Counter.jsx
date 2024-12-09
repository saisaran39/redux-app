import { useSelector,useDispatch } from "react-redux"
import counterSlice from '../redux/CounterSlice';

const action = counterSlice.actions;

export default function Counter() {
   const {count} =  useSelector((store)=>store.counterState);
   const dispatch = useDispatch();

   const handleDecrement = ()=>{
    dispatch(action.decrement());
   }
   
   const handleIncrement = ()=>{
    dispatch(action.increment());
   }

   const handleChange = (event) => {
      dispatch(action.handleValue(event.target.value));
   }  
  
  return (
    <div style={{display:'flex'}}>
      <input type="text" onChange={handleChange} />
        <button onClick={handleDecrement}>Decrement</button>
        <h1>count value is : {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
