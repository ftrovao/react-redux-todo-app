import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import { toggleComment} from './todoSlice';

export default configureStore({
    reducer: {
        todos: todoReducer,
        toggle: toggleComment,
    }
})