import axios from "axios"
import {  ActionContext,ActionTree } from 'vuex';
import { user} from '../../../types'
import {UserState, RootState} from '../../state'

type UserContext = ActionContext<UserState,RootState>
const baseUrl = " http://localhost:3000/user";

export const  actions:ActionTree<UserState, RootState>={
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