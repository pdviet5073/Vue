<template>
    <div class="detail">
        <div>{{ detail.id }}-{{ detail.title }}-{{ detail.price }}</div>
        <button>
            <router-link :to="{ path: `/todo/3` }">next</router-link>
        </button>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "TodoDetail",
    data() {
        return {
            bgc: "#ccc",
        };
    },

    mounted() {
        this.getTodoDetail(this.$route.params.id);
    },

    computed: {
        ...mapState({
            detail: (state) => state.todos.todoDetail,
        }),
    },

    methods: {
        ...mapActions(["getTodoDetail"]),
    },
    watch: {
        $route() {
            this.getTodoDetail(this.$route.params.id);
        },
    },
};
</script>

<style scoped>
.detail {
    height: 5000px;
}
.div {
    margin: 10px;
    width: 100px;
    height: 100px;
    background-color: #ccc;
}
</style>
