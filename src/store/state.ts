import {todo, user} from "../types"

export interface ModuleState {
}


export interface TodoState extends ModuleState{
    todoData: todo[],
    todoDetail: todo,
}

export interface UserState extends ModuleState{
    dataUser: user;
    register: user;
}

export  interface RootState{
  todo: TodoState,
  user: UserState
}
