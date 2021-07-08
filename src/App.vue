<template>
    <div id="app">
        <DefaultLayout>
            <router-view />
        </DefaultLayout>
    </div>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";
export default {
    name: "App",
    components: { DefaultLayout },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
