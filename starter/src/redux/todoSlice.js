import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: "todos",
    initialState: [
        {id: 1, title:"todo1", completed: false},
        {id: 2, title:"todo2", completed: false},
        {id: 3, title:"todo3", completed: true},
        {id: 4, title:"todo4", completed: true},
    ],
    reducers: {
        addTodoLimao: (state, action) => {
            console.log("action antes: ");
            console.log(action);
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            state.push(newTodo);
            // console.log("action depois: ");
            // console.log(action);
            // console.log("action.type: ");
            // console.log(action.type);
            // console.log("action.constructor: ");
            // console.log(action.constructor);
            // console.log("action.hasOwnProperty: ");
            // console.log(action.hasOwnProperty.length);
        },
        toggleComment: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        }
    },
})
//criacao de uma action para cada caso
export const { addTodoLimao, toggleComment} = todoSlice.actions;
//exportar para a store ter acesso ao reducer
export default todoSlice.reducer;