<template>
    <footer class="footer">
        <h2>Footer</h2>
        <select v-model="select">
            <option value="vi">
                <img src="https://www.growthbunker.dev/images/vueflags/flags/vn.svg" alt="vi" />
                Viet nam
            </option>
            <option value="en">
                <img src="https://www.growthbunker.dev/images/vueflags/flags/au.svg" alt="en" />
                English
            </option>
        </select>
        <p>{{ caculator }}</p>
    </footer>
</template>

<script lang="ts">
import { localeChanged } from "vee-validate";
import Vue from "vue";
import i18n from "../plugins/i18n";
import { Component, Watch } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
    select: string = JSON.parse(localStorage.getItem("i18n")!) || "en";

    get caculator(): string {
        return this.select + "ok";
    }

    changeLocale(locale: string) {
        i18n.locale = locale;
        //update locale vee validate
        localeChanged();
        localStorage.setItem("i18n", JSON.stringify(this.select));
    }
    @Watch("select", { deep: true })
    handleChaneSelect() {
        // dùng deep và handler trong trường hợp theo dõi mảng hoặc object
        this.changeLocale(this.select);
    }
}
</script>
<style scoped>
.footer {
    text-align: center;
}
</style>
