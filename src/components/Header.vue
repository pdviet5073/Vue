<template>
    <header class="header">
        <!-- color:  arg, delay: modified -->
        <h2 v-bg:color.delay="'red'">{{ $t("header.HEADER") }}</h2>
    </header>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style scoped>
.header {
    text-align: center;
}
</style>
