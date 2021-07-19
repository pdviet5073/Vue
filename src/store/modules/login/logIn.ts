import { UserState } from "../../state";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

const state: UserState = {
    dataUser: {},
    register: {},
};

const logIn = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true,
};
export default logIn;
