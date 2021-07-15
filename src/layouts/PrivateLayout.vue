<template>
    <div class="layout">
        <main>
            <slot></slot>
        </main>
        <Footer />
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
    name: "PrivateLayout",
    components: {
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
