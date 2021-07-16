<template>
    <form @submit.prevent="handleAddOrUpdateTodo">
        <div>
            <input type="text" :value="title" @change="(e) => setTitle(e.target.value)" />
            <input type="number" :value="price" @change="(e) => setPrice(e.target.value)" />
        </div>
        <button type="submit">
            {{ !selectTodoUpdate ? "Add" : "Update" }}
        </button>
    </form>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Action } from "vuex-class";
// import { todoType } from "../types";

@Component({})
export default class TodoForm extends Vue {
    @Prop(Number) selectTodoUpdate!: number;
    @Prop(String) title!: string;
    @Prop(Number) price!: number;
    @Prop(Function) setTitle!: Function;
    @Prop(Function) setSelectTodoUpdate!: Function;
    @Prop(Function) setPrice!: Function;

    @Action("todo/addTodo") readonly addTodo!: Function;

    @Action("todo/updateTodo") updateTodo!: Function;

    handleAddOrUpdateTodo(e: Event) {
        e.preventDefault();
        if (!this.selectTodoUpdate) {
            this.title && this.addTodo({ title: this.title, completed: false, price: this.price });
            this.setTitle(" ");
            this.setPrice(0);
        } else {
            this.title &&
                this.updateTodo({
                    title: this.title,
                    id: this.selectTodoUpdate,
                    price: this.price,
                });
            this.setTitle("");
            this.setPrice(0);
            this.setSelectTodoUpdate(0);
        }
    }
}
</script>

<style lang="scss" scoped>
form {
    input {
        width: 100%;
        height: 20px;
    }
    button {
        display: block;
        margin: 10px auto;
        background-color: #2aa745;
        border: none;
        color: #fff;
    }
}
</style>
