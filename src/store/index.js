import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './reducers/todoSlice'


//store

const store = configureStore({
    reducer: {
        todosReducer: todosReducer
    }
})
//selector

export default store