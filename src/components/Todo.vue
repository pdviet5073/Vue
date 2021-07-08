<template>
    <div class="todo">
        <h2>Todo List ({{ todoDone.length }}/{{ todos.length }})</h2>
        <TodoForm
            :selectTodoUpdate="selectTodoUpdate"
            :setSelectTodoUpdate="setSelectTodoUpdate"
            :title="title"
            :setTitle="setTitle"
            :price="price"
            :setPrice="setPrice"
        />
        <p v-if="!isLoading">loading..</p>
        <div v-else class="content">
            <input type="checkbox" :checked="completed" @change="completed = !completed" />
            <ul class="todo__list">
                <li
                    :class="['todo__item', { 'todo__item--success': todo.completed }]"
                    v-for="todo in todos"
                    :key="todo.id"
                >
                    <div>
                        <input
                            type="checkbox"
                            :checked="todo.completed"
                            @change="markTodo({ id: todo.id, completed: todo.completed })"
                        />
                        <span> {{ todo.title }}</span>
                    </div>
                    <div class="todo__item--btn">
                        <button
                            class="button btn-warning"
                            @click="[(selectTodoUpdate = todo.id), (title = todo.title)]"
                        >
                            Update
                        </button>
                        <button class="button btn-danger" @click="deleteTodo(todo.id)">Delete</button>
                        <button class="button btn-success">
                            <router-link :to="{ path: `/todo/${todo.id}` }">Detail</router-link>
                        </button>
                        <button class="button btn-secondary" @click="addToCart(todo)">
                            Add cart
                        </button>
                    </div>
                </li>
            </ul>
            <TodoSuccess />
        </div>
    </div>
</template>

<script>
import TodoForm from "./TodoForm.vue";
import TodoSuccess from "./TodoSuccess.vue";

// import Modal from "./Modal.vue";

import { mapActions, mapGetters } from "vuex";

export default {
    name: "Todo",
    components: {
        TodoForm,
        TodoSuccess,
    },
    data() {
        return {
            selectTodoUpdate: 0,
            title: "",
            price: 0,
            isLoading: false,
            completed: false,
        };
    },
    computed: mapGetters(["todos", "todoDone"]),
    created() {
        setTimeout(() => {
            this.isLoading = true;
        }, 1000);
    },
    mounted() {
        this.getTodo({});
        this.isLoading = false;
    },

    methods: {
        ...mapActions(["getTodo", "addTodo", "markTodo", "deleteTodo"]),
        handleReset() {
            this.title = "";
        },
        handleResetAll() {
            this.selectTodoUpdate = 0;
            this.title = "";
        },
        setTitle(title) {
            this.title = title;
        },
        setPrice(price) {
            this.price = parseInt(price);
        },
        setSelectTodoUpdate(value) {
            this.selectTodoUpdate = value;
        },
        addToCart(data) {
            const cartData = JSON.parse(localStorage.getItem("cart")) || [];
            if (cartData) {
                const indexTodo = cartData.findIndex((item) => item.id === data.id);
                if (indexTodo != -1) {
                    const todo = cartData.find((item) => item.id === data.id);
                    cartData.splice(indexTodo, 1, { ...todo, count: todo.count + 1 });
                } else cartData.push({ ...data, count: 1 });
            } else cartData.push({ ...data, count: 1 });
            localStorage.setItem("cart", JSON.stringify([...cartData]));
        },
    },
    watch: {
        completed() {
            this.getTodo({ completed: this.completed });
        },
    },
};
</script>

<style scoped lang="scss">
.todo {
    a {
        color: #fff;
        text-decoration: none;
    }
    &__list {
        padding: 0;
    }

    &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3px 20px;
        margin: 10px 0;
        list-style: none;
        background-color: rgb(226, 222, 222);

        &--success {
            background-color: rgb(119, 218, 243);
            color: #fff;
        }

        &--btn {
            position: relative;
            display: flex;
            gap: 10px;
            z-index: 100;
        }
    }

    .button {
        display: block;
        margin: 10px auto;
        border: none;
        color: #fff;
    }
}
</style>
