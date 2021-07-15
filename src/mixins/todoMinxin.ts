// import { mapActions, mapGetters } from "vuex";
// import Vue from 'vue'
// import {todo} from "../types"



// export  const todos =  Vue.extend({

//     computed: mapGetters(["todos", "todoDone"]),
//     created() {
//         setTimeout(() => {
//             this.isLoading  = true;
//         }, 1000);
//     },
//     mounted() {
//         this.getTodo({});
//         this.isLoading = false;
//     },

//     methods: {
//         ...mapActions(["getTodo", "addTodo", "markTodo", "deleteTodo"]),
//         addToCart(data: todo) {
//             const local = localStorage.getItem("cart") as string
//             const cartData   = JSON.parse(local) || [];
//             if (cartData) {
//                 const indexTodo = cartData.findIndex((item: todo) => item.id === data.id);
//                 if (indexTodo != -1) {
//                     const todo = cartData.find((item: todo) => item.id === data.id);
//                     cartData.splice(indexTodo, 1, { ...todo, count: todo.count + 1 });
//                 } else cartData.push({ ...data, count: 1 });
//             } else cartData.push({ ...data, count: 1 });
//             localStorage.setItem("cart", JSON.stringify([...cartData]));
//         },
//     },
    
// })