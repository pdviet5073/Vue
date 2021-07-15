import axios from "axios"
import {  ActionContext,MutationTree,ActionTree, GetterTree } from 'vuex';
import {todo} from "../../types"
import {RootState, TodoState} from "../state";
const baseUrl = " http://localhost:3000/todos";

    type TodoContext = ActionContext<TodoState,RootState>

   const state:TodoState = {
        todoData:[],
        todoDetail:{}
    }

    const getters: GetterTree<TodoState, RootState>= {
        todos: (state:TodoState) => state.todoData,
        todoDone: (state:TodoState)  => state.todoData.filter(todo =>todo.completed),
    }

   const actions:ActionTree<TodoState, RootState> ={
       async getTodo({commit}: TodoContext, payload:any){
            try {
                const {completed} = payload
                const response = await axios({
                    url: baseUrl,
                    method:"GET",
                    params:{
                        _limit:10,
                        ...(completed&&{completed:completed})

                    }
                })
                commit("GET_TODO",response.data)
            } catch (error) {
                console.log(error)
            }
        }
        ,
        async addTodo({commit}: TodoContext, newTodo:todo){
            try {
                const response = await axios.post(`${baseUrl}`,newTodo)
                commit("ADD_TODO",response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async markTodo({commit}: TodoContext, todo:todo){
            try {
                const {id, completed} = todo
                const response = await axios.patch(`${baseUrl}/${id}`, {completed: !completed})
                commit("MARK_TODO",response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async updateTodo({commit}: TodoContext, todo:todo){
            try {
                const {id, title} = todo
                const response = await axios.patch(`${baseUrl}/${id}`, {title})
                commit("UPDATE_TODO",response.data)
            } catch (error) {
                console.log(error)
            }
        }
        ,
        async deleteTodo({commit}: TodoContext, todoId:Number){
            try {
             await axios.delete(`${baseUrl}/${todoId}`)
                commit("DELETE_TODO",todoId)
            } catch (error) {
                console.log(error)
            }
        },
        async getTodoDetail({commit}: TodoContext, id:Number){
            try {
                const response = await axios.get(`${baseUrl}/${id}`)
                commit("GET_TODO_DETAIL",response.data)
            } catch (error) {
                console.log(error)
            }
        }

    }

  const  mutations: MutationTree<TodoState>= {
        GET_TODO(state: TodoState, todo:Array<todo>){
            state.todoData = todo
        },
        ADD_TODO(state: TodoState, newTodo:todo){
            state.todoData.unshift(newTodo)
        },
        MARK_TODO(state: TodoState, todo:todo){
            const tempTodo = JSON.parse(JSON.stringify(state.todoData))
            const index =tempTodo.findIndex((item:todo) =>item.id===todo.id)
           tempTodo.splice(index, 1, todo)
            state.todoData = tempTodo
        },
        UPDATE_TODO(state: TodoState, todoUpdate:todo){
            const tempTodo = JSON.parse(JSON.stringify(state.todoData))
            const index =tempTodo.findIndex((item: todo) =>item.id===todoUpdate.id)
           tempTodo.splice(index, 1, todoUpdate)
            state.todoData = tempTodo
        },
        DELETE_TODO(state: TodoState, todoId:Number){
            const index =state.todoData.findIndex(item =>item.id===todoId)
            state.todoData.splice(index, 1)
        },
        GET_TODO_DETAIL(state: TodoState, todoDetail:todo){
            state.todoDetail = {...todoDetail}
        }

    }


export default {
    state,
  getters,
  mutations,
  actions
}
