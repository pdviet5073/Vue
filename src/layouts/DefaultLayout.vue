<template>
    <div class="layout">
        <Header />
        <main>
            <slot></slot>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "DefaultLayout",
    components: {
        Header,
        Footer,
    },
};
</script>
<style scoped>
.layout {
    max-width: 800px;
    padding: 20px;
    margin: 20px auto;
}
</style>
