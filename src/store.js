import { createStore } from 'redux';
import { TodoData } from './reducer/todoReducer';

export const store = createStore(TodoData)