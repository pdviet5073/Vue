import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import {  TodoState } from "../../state";

const state: TodoState = {
    todoData: [],
    todoDetail: {},
};

const todo=  {
    state,
    getters,
    mutations,
    actions,
    namespaced: true,
};
export default todo
