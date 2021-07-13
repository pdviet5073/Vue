<template>
    <div id="app">
        <DefaultLayout>
            <router-view />
        </DefaultLayout>
    </div>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";
import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/en.json";

Object.keys(rules).forEach((rule) => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages[rule], // assign message
    });
});

export default {
    name: "App",
    components: { DefaultLayout },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.control {
    width: 100%;
    span {
        display: block;
    }
    input {
        padding: 5px 10px;
    }
    .invalid {
        input,
        span {
            color: #eb0600;
            input {
                border: 1px #eb0600 solid;
            }
        }
    }
    .valid {
        input,
        span {
            color: #045929;
        }
        input {
            border: 1px #045929 solid;
        }
    }
}
</style>
