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
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "TodoDone",

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
</style>
