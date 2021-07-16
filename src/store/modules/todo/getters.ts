import {  GetterTree } from 'vuex';
import {RootState, TodoState} from "../../state";

export const getters: GetterTree<TodoState, RootState>= {
    todos: (state:TodoState) => state.todoData,
    todoDone: (state:TodoState)  => state.todoData.filter(todo =>todo.completed),
}