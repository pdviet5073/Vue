import Vue from 'vue'
import Vuex from 'vuex'

import todos from "./modules/todos"
import logIn from "./modules/logIn"



Vue.use(Vuex)


const store = new Vuex.Store({
    modules:{
        todos,
        logIn
    },
    namespace: true
})

export default store
