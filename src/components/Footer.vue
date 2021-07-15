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

<script>
import { localeChanged } from "vee-validate";
import i18n from "../i18n";
export default {
    name: "Footer",
    data() {
        return {
            select: JSON.parse(localStorage.getItem("i18n")) || "en",
        };
    },

    computed: {
        caculator() {
            return this.select + "ok";
        },
    },

    methods: {
        changeLocale(locale) {
            i18n.locale = locale;
            //update locale vee validate
            localeChanged();
            localStorage.setItem("i18n", JSON.stringify(this.select));
        },
    },
    watch: {
        select: {
            // dùng deep và handler trong trường hợp theo dõi mảng hoặc object
            handler() {
                this.changeLocale(this.select);
            },
            deep: true,
        },
    },
};
</script>
<style scoped>
.footer {
    text-align: center;
}
</style>
