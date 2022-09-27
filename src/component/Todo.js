import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, markComplete, todoSelector, getTodos } from '../store/reducers/todoSlice';
const Todo = () => {
    const todos = useSelector(todoSelector);
    const dispatch = useDispatch()

    const hanldeToggleCompleted = (todoId) => {
        console.log(todoId);
        dispatch(markComplete(todoId))
    }
    const handleDelete = (todoId) => {
        dispatch(deleteTodo(todoId))
    }
    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])
    return (
        <div className='todo-list'>
            <TodoForm />
            <ul>
                {todos.map((toto) => {
                    return (
                        <li key={toto.id} className={toto.complete ? 'completed' : ''}>{toto.title}
                            <input type="checkbox" checked={toto.complete} onChange={() => {
                                hanldeToggleCompleted(toto.id)
                            }} />
                            <button onClick={() => {
                                handleDelete(toto.id)
                            }}>delete</button>
                        </li>
                    )

                })}
            </ul>
        </div>
    );
};

export default Todo;