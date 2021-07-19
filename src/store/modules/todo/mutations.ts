import { MutationTree} from 'vuex';
import {todoType} from "../../../types"
import { TodoState} from "../../state";

export  const  mutations: MutationTree<TodoState>= {
    GET_TODO(state: TodoState, todo:Array<todoType>){
        state.todoData = todo
    },

    ADD_TODO(state: TodoState, newTodo:todoType){
        state.todoData.unshift(newTodo)
    },

    MARK_TODO(state: TodoState, todo:todoType){
        const tempTodo: Array<todoType> = JSON.parse(JSON.stringify(state.todoData))
        const index:number =tempTodo.findIndex((item) =>item.id===todo.id)
       tempTodo.splice(index, 1, todo)
        state.todoData = tempTodo
    },

    UPDATE_TODO(state: TodoState, todoUpdate:todoType){
        const tempTodo: Array<todoType> = JSON.parse(JSON.stringify(state.todoData))
        const index:number =tempTodo.findIndex((item) =>item.id===todoUpdate.id)
       tempTodo.splice(index, 1, todoUpdate)
        state.todoData = tempTodo
    },

    DELETE_TODO(state: TodoState, todoId:Number){
        const index: number =state.todoData.findIndex(item =>item.id===todoId)
        state.todoData.splice(index, 1)
    },

    GET_TODO_DETAIL(state: TodoState, todoDetail:todoType){
        state.todoDetail = {...todoDetail}
    }
}