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
                            @click="
                                [(selectTodoUpdate = todo.id), (title = todo.title), (price = todo.price)]
                            "
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

<script lang="ts">
import { todoMixin } from "@/mixins/todoMinxin";
import TodoForm from "./TodoForm.vue";
import TodoSuccess from "./TodoSuccess.vue";
import { Component, Watch } from "vue-property-decorator";

@Component({
    components: {
        TodoForm,
        TodoSuccess,
    },
})
export default class Todo extends todoMixin {
    //data
    selectTodoUpdate: number = 0;
    title: string = "";
    price: number = 0;
    completed: boolean = false;

    // filters: {
    //     toUppercase(value: string) {
    //         return value.toUpperCase();
    //     },
    // },

    //computed/mapGetters

    handleReset() {
        this.title = "";
    }
    handleResetAll() {
        this.selectTodoUpdate = 0;
        this.title = "";
    }
    setTitle(title: string) {
        this.title = title;
    }
    setPrice(price: string) {
        this.price = parseInt(price);
    }
    setSelectTodoUpdate(value: number) {
        this.selectTodoUpdate = value;
    }

    @Watch("completed")
    onCompletedChanged(): void {
        this.getTodo({ completed: this.completed });
    }
}
</script>

<style scoped lang="scss">
.todo {
    height: 5000px;
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
