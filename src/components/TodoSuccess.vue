<template>
    <div>
        <h3>
            Done
            <router-link :to="'/cart'">Cart</router-link>
        </h3>
        <p>Total price: {{ totalPrice() }}</p>
        <ul>
            <li v-for="todo in todoDone" :key="todo.id">{{ todo.title }} - {{ todo.price }}</li>
        </ul>
        <button @click="show = !show">Click</button>
        <transition name="fade">
            <div class="square" if="show"></div>
        </transition>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "TodoDone",
    data() {
        return {
            show: true,
        };
    },
    computed: mapGetters(["todoDone"]),
    methods: {
        totalPrice() {
            return this.todoDone.reduce((total, current) => {
                return total + current.price;
            }, 0);
        },
    },
};
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
