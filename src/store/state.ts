import {todoType, user} from "../types"

export interface ModuleState {
}


export interface TodoState extends ModuleState{
    todoData: todoType[],
    todoDetail: todoType,
}

export interface UserState extends ModuleState{
    dataUser: user;
    register: user;
}

export  interface RootState{
  todo: TodoState,
  user: UserState
}
