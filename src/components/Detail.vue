<template>
    <div class="detail">
        <div>{{ todoDetail.id }}-{{ todoDetail.title }}-{{ todoDetail.price }}</div>
        <button>
            <router-link :to="{ path: `/todo/3` }">next</router-link>
        </button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { todoType } from "../types";

@Component
export default class TodoDetail extends Vue {
    bgc: string = "#ccc";

    @State((state) => state.todo.todoDetail) todoDetail!: todoType;

    @Action("todo/getTodoDetail") getTodoDetail!: Function;

    mounted() {
        this.getTodoDetail(this.$route.params.id);
    }

    @Watch("$route")
    handleChangeRoute() {
        this.getTodoDetail(this.$route.params.id);
    }
}
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
