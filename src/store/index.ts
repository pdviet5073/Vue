import Vue from 'vue'
import Vuex from 'vuex'
import todo from "./modules/todo"
import logIn from "./modules/login/logIn"

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules:{
        todo,
        logIn
    },
})

export default store
