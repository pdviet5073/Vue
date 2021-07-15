import axios from "axios"
import {  ActionContext, MutationTree,ActionTree, GetterTree } from 'vuex';
import {  Commit} from 'vuex';
import { user} from '../../types'
import {UserState, RootState} from '../state'
const baseUrl = " http://localhost:3000/user";


 type UserContext = ActionContext<UserState,RootState>

  const state:UserState={
        dataUser:{},
        register:{}
    }

    const  getters:GetterTree<UserState, RootState>= {

    }
    const  actions:ActionTree<UserState, RootState>={
        async logIn({commit}: UserContext, payload:user){
            try {
                const {userName, password} =payload
                const response= await axios.get(`${baseUrl}?userName=${userName}`)
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
        async register({commit}: UserContext, payload:user){
            try {
                const response = await axios.post(`${baseUrl}`, payload)
                commit("REGISTER",response.data[0])
               
            } catch (error) {
                console.log(error)
            }
        }
    }

    const mutations:MutationTree<UserState>= {
        
        LOGIN_SUCCESS(state:UserState,infoUser:user){
            state.dataUser= infoUser
        },
        LOGIN_FAIL(state: UserState,infoUser:any){
            state.dataUser= infoUser
        },
        REGISTER(state:UserState,infoUser:user){
            state.register= infoUser
        },
        
    }


export default  {
    state,
    getters,
    mutations,
    actions
}