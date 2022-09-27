import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/reducers/todoSlice';
const TodoForm = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const handleAddTodo = (e) => {
        e.preventDefault();
        // console.log(title);
        dispatch(addTodo(title))
        setTitle('')


    }
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleAddTodo}>

                <input type="text" value={title} onChange={handleChangeTitle} />
                <input type="submit" value='Add' />
            </form>
        </div>
    );
};

export default TodoForm;