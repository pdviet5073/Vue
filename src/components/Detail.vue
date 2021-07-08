<template>
    <div>{{ detail.id }}-{{ detail.title }}-{{ detail.price }}</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "TodoDetail",

    mounted() {
        this.getTodoDetail(this.$route.params.id);
    },

    computed: mapState({
        detail: (state) => state.todos.todoDetail,
    }),

    methods: mapActions(["getTodoDetail"]),
};
</script>

<style scoped></style>
