import { useDispatch, useSelector } from "react-redux"
import toDoSlice from "../redux/ToDoSlice";

const action = toDoSlice.actions;
export function ToDoComponent() {
    const {currentTask, toDoList} = useSelector((store) => store.toDoState);
    debugger
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch(action.setValue(event.target.value));
    }
    const handleClick = () => {
        dispatch(action.setList());
    }
    return (
        <div>
            <input type="text" onChange={handleChange} value={currentTask} />
            <button onClick={handleClick}>Add</button>
            <ul>
            {toDoList.map((task)=>{
                return (
                    <li key={task}>{task}</li>
                )
            })} 
            </ul>
        </div>
    )
}