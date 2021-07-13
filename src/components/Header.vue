<template>
    <header class="header">
        <!-- color:  arg, delay: modified -->
        <h2 v-bg:color.delay="'red'">{{ $t("header.HEADER") }}</h2>
    </header>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style scoped>
.header {
    text-align: center;
}
</style>
