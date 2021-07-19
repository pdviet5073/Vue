import axios from "axios"
import {  ActionContext,MutationTree,ActionTree } from 'vuex';
import {todoType} from "../../../types"
import {RootState, TodoState} from "../../state";
const baseUrl = " http://localhost:3000/todos";

type TodoContext = ActionContext<TodoState,RootState>

export const actions:ActionTree<TodoState, RootState> ={
    async getTodo({commit}: TodoContext, payload:todoType){
         try {
             const {completed} = payload
             const response = await axios({
                 url: baseUrl,
                 method:"GET",
                 params:{
                     _limit:10,
                     ...(completed && {completed:completed})
                 }
             })
             commit("GET_TODO",response.data)
         } catch (error) {
             console.log(error)
         }
     },

     async addTodo({commit}: TodoContext, newTodo:todoType){
         try {
             const response = await axios.post(`${baseUrl}`,newTodo)
             commit("ADD_TODO",response.data)
         } catch (error) {
             console.log(error)
         }
     },

     async markTodo({commit}: TodoContext, todo:todoType){
         try {
             const {id, completed} = todo
             const response = await axios.patch(`${baseUrl}/${id}`, {completed: !completed})
             commit("MARK_TODO",response.data)
         } catch (error) {
             console.log(error)
         }
     },

     async updateTodo({commit}: TodoContext, todo:todoType){
         try {
             const {id, title} = todo
             const response = await axios.patch(`${baseUrl}/${id}`, {title})
             commit("UPDATE_TODO",response.data)
         } catch (error) {
             console.log(error)
         }
     },

     async deleteTodo({commit}: TodoContext, todoId:Number){
         try {
          await axios.delete(`${baseUrl}/${todoId}`)
             commit("DELETE_TODO",todoId)
         } catch (error) {
             console.log(error)
         }
     },

     async getTodoDetail({commit}: TodoContext, id:string){
         try {
             const response = await axios.get(`${baseUrl}/${id}`)
             commit("GET_TODO_DETAIL",response.data)
         } catch (error) {
             console.log(error)
         }
     }
 }