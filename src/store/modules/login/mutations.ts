import { MutationTree} from 'vuex';
import { user} from '../../../types'
import {UserState} from '../../state'

export const mutations:MutationTree<UserState>= {
        
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