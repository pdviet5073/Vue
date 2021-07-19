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
import { Vue, Component } from "vue-property-decorator";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

@Component({
    components: {
        Header,
        Footer,
    },
})
export default class DefaultLayout extends Vue {}
</script>

<style scoped>
.layout {
    max-width: 800px;
    padding: 20px;
    margin: 20px auto;
}
</style>
