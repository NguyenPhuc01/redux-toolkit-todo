import React from 'react';
import { useSelector } from 'react-redux'
import { todoSelector } from '../store/reducers/todoSlice';
const Navbar = () => {

    const todos = useSelector(todoSelector);
    return (
        <div className='navbar'>
            <h1>My redux Todos App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total: {todos.length}</li>
            </ul>
        </div>
    );
};

export default Navbar;