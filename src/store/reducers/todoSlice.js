import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTodos = createAsyncThunk('todos/todoFetch', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    return res.data

})

export const addTodo = createAsyncThunk('todos/addTodo', async (title) => {
    const newTodo = {
        id: nanoid(),
        title,
        complete: false
    }
    await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
    return newTodo
})
export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (todoId) => {

    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    return todoId
})
const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        alltodos: []
    },

    reducers: {
        // addTodo: {
        //     reducer(state, action) {
        //         state.alltodos.push(action.payload)
        //     },
        //     prepare(title) {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 title,
        //                 complete: false
        //             }
        //         }
        //     }
        // },
        markComplete(state, action) {
            const todoId = action.payload
            state.alltodos = state.alltodos.map(todo => {
                if (todo.id === todoId) {
                    todo.complete = !todo.complete
                }
                return todo

            })
        },
        // DeleteTodo(state, action) {
        //     const todoId = action.payload
        //     state.alltodos = state.alltodos.filter(todo => todo.id !== todoId)
        // },
        // async getAllTodos(state, action) {
        //     try {
        //         const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
        //         state.alltodos = res.data
        //     } catch (error) {

        //     }
        // }

    },
    extraReducers: {
        [getTodos.pending]: (state, action) => {
            console.log('call api');
        },
        [getTodos.fulfilled]: (state, action) => {
            console.log('done');
            state.alltodos = action.payload
        },
        [getTodos.rejected]: (state, action) => {
            console.log('fall');
        },
        //addTodo
        [addTodo.fulfilled]: (state, action) => {
            state.alltodos.unshift(action.payload)
        },
        //delete todo
        [deleteTodo.fulfilled]:(state,action)=>{
            const todoId = action.payload
             state.alltodos = state.alltodos.filter(todo => todo.id !== todoId)
        }
    }
})

// reducer
const todosReducer = todoSlice.reducer
//selector

export const todoSelector = state => state.todosReducer.alltodos
//action 
export const { markComplete } = todoSlice.actions
export default todosReducer
