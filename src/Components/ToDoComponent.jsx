import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todoSlice from '../redux/ToDoSlice';

const action = todoSlice.actions;
export default function ToDoComponent() {
    const {value, todoList} = useSelector((store) => store.todoState);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch(action.setValue(event.target.value));
    }
    const handleClick = () => {
        dispatch(action.updatedList());
    }
  return (
    <div>
        <input onChange={handleChange} value={value} type="text"/>
        <button onClick={handleClick}>Add</button>
        <ul>
            {
                todoList.map((task) => {
                    return (
                        <li>{task}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}
