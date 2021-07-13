import axios from "axios"

const baseUrl = " http://localhost:3000/user";
const LoginModule ={
    state:{
        dataUser:{ },
        register:{}

    },

    getters: {

    },

    actions:{
        async logIn({commit}, payload){
            try {
                const {userName, password} =payload
                const response = await axios.get(`${baseUrl}?userName=${userName}`)
                const data = response.data
                if(data[0].password === password){
                    commit("LOGIN_SUCCESS",response.data[0])
                    localStorage.setItem("auth", JSON.stringify(response.data[0]))
                } else {
                    commit("LOGIN_FAIL", {})
                }
            } catch (error) {
                console.log(error)
            }
        },
        async register({commit}, payload){
            try {
                const response = await axios.post(`${baseUrl}`, payload)
                commit("REGISTER",response.data[0])
               
            } catch (error) {
                console.log(error)
            }
        }
    },

    mutations: {
        
        LOGIN_SUCCESS(state,infoUser){
            state.dataUser= infoUser
        },
        LOGIN_FAIL(state,infoUser){
            state.dataUser= infoUser
        },
        REGISTER(state,infoUser){
            state.register= infoUser
        },
        
    },
}

export default LoginModule 