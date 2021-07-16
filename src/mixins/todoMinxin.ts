import Vue from 'vue'
import {todoType} from "../types"
import { Action, Getter } from "vuex-class";
import {Component} from "vue-property-decorator"

@Component
export class todoMixin extends Vue {
    isLoading: boolean= false

     //computed/mapGetters
    @Getter("todo/todos") todos!: todoType[]
    @Getter("todo/todoDone") todoDone!: todoType[]

    //methods/mapActions
    @Action("todo/getTodo") getTodo!: Function;
    @Action("todo/markTodo") markTodo!: Function;
    @Action("todo/deleteTodo") deleteTodo!: Function;

    created() {
        setTimeout(() => {
            this.isLoading  = true;
        }, 1000);
    }
    
    mounted() {
        this.getTodo({});
        this.isLoading = false;
    }

    addToCart(data: todoType) {
        const local = localStorage.getItem("cart") as string;
        const cartData = JSON.parse(local) || [];
        if (cartData) {
            const indexTodo = cartData.findIndex((item: todoType) => item.id === data.id);
            if (indexTodo != -1) {
                const todo = cartData.find((item: todoType) => item.id === data.id);
                cartData.splice(indexTodo, 1, { ...todo, count: todo.count + 1 });
            } else cartData.push({ ...data, count: 1 });
        } else cartData.push({ ...data, count: 1 });
        localStorage.setItem("cart", JSON.stringify([...cartData]));
    }
    
}