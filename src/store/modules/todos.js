import axios from "axios"

const baseUrl = " http://localhost:3000/todos";
const todoModule ={
    state:{
        todoData:[],
        todoDetail:{}
    },

    getters: {
        todos: state => state.todoData,
        todoDone: state => state.todoData.filter(todo =>todo.completed),
        

    },

    actions:{
       async getTodo({commit}, payload){
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
        async addTodo({commit}, newTodo){
            try {
                const response = await axios.post(`${baseUrl}`,newTodo)
                commit("ADD_TODO",response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async markTodo({commit}, todo){
            try {
                const {id, completed} = todo
                const response = await axios.patch(`${baseUrl}/${id}`, {completed: !completed})
                commit("MARK_TODO",response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async updateTodo({commit}, todo){
            try {
                const {id, title} = todo
                const response = await axios.patch(`${baseUrl}/${id}`, {title})
                commit("UPDATE_TODO",response.data)
            } catch (error) {
                console.log(error)
            }
        }
        ,
        async deleteTodo({commit}, todoId){
            try {
             await axios.delete(`${baseUrl}/${todoId}`)
                commit("DELETE_TODO",todoId)
            } catch (error) {
                console.log(error)
            }
        },
        async getTodoDetail({commit}, id){
            try {
                const response = await axios.get(`${baseUrl}/${id}`)
                commit("GET_TODO_DETAIL",response.data)
            } catch (error) {
                console.log(error)
            }
        }

    },

    mutations: {
        GET_TODO(state, todo){
            state.todoData = todo
        },
        ADD_TODO(state, newTodo){
            state.todoData.unshift(newTodo)
        },
        MARK_TODO(state, todo){
            const tempTodo = JSON.parse(JSON.stringify(state.todoData))
            const index =tempTodo.findIndex(item =>item.id===todo.id)
           tempTodo.splice(index, 1, todo)
            state.todoData = tempTodo
        },
        UPDATE_TODO(state, todoUpdate){
            const tempTodo = JSON.parse(JSON.stringify(state.todoData))
            const index =tempTodo.findIndex(item =>item.id===todoUpdate.id)
           tempTodo.splice(index, 1, todoUpdate)
            state.todoData = tempTodo
        },
        DELETE_TODO(state, todoId){
            const index =state.todoData.findIndex(item =>item.id===todoId)
            state.todoData.splice(index, 1)
        },
        GET_TODO_DETAIL(state, todoDetail){
            state.todoDetail = {...todoDetail}
        }

    },
}

export default todoModule
