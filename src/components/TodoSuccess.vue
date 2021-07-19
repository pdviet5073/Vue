<template>
    <div>
        <h3>
            Done
            <router-link :to="'/cart'">Cart</router-link>
        </h3>
        <!-- <p>Total price: {{ totalPrice() }}</p> -->
        <ul>
            <li v-for="todo in todoDone" :key="todo.id">{{ todo.title }} - {{ todo.price }}</li>
        </ul>
        <button @click="show = !show">Click</button>
        <transition name="fade">
            <div class="square" if="show"></div>
        </transition>
    </div>
</template>

<script lang="ts">
import { todoType } from "@/types";
import Vue from "vue";
import { Getter } from "vuex-class";
import { Component } from "vue-property-decorator";

@Component
export default class TodoDone extends Vue {
    show: boolean = true;

    @Getter("todo/todoDone") todoDone!: todoType[];

    totalPrice(): number {
        return this.todoDone.reduce((total: number, current) => {
            return total + current.price!;
        }, 0);
    }
}
</script>

<style lang="scss" scoped>
.ipnut__done {
    margin-left: 50px;
    width: 50px;
}
.square {
    width: 50px;
    height: 50px;
    background-color: red;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
