<template>
    <div class="layout">
        <main>
            <slot></slot>
        </main>
        <Footer />
    </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Footer from "../components/Footer.vue";

@Component({
    components: {
        Footer,
    },
})
export default class PrivateLayout extends Vue {}
</script>

<style scoped>
.layout {
    max-width: 800px;
    padding: 20px;
    margin: 20px auto;
}
</style>
