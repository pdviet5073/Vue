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

<script>
import { mapActions } from "vuex";

export default {
    name: "TodoForm",

    data() {
        return {};
    },

    props: {
        selectTodoUpdate: Number,
        title: String,
        price: Number,
        setTitle: Function,
        setSelectTodoUpdate: Function,
        setPrice: Function,
    },
    created() {},

    methods: {
        ...mapActions(["addTodo", "updateTodo"]),

        handleAddOrUpdateTodo(e) {
            e.preventDefault();
            if (!this.selectTodoUpdate) {
                this.title &&
                    this.addTodo({ title: this.title, completed: false, price: parseInt(this.price) });
                this.setTitle("");
                this.setPrice(0);
            } else {
                this.title &&
                    this.updateTodo({
                        title: this.title,
                        id: this.selectTodoUpdate,
                        price: parseInt(this.price),
                    });
                this.setTitle("");
                this.setPrice(0);
                this.setSelectTodoUpdate(0);
            }
        },
    },
};
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
