<template>
    <div id="app">
        <component :is="$route.meta.layout || 'div'">
            <transition name="faded-in">
                <router-view />
            </transition>
        </component>
    </div>
</template>

<script>
export default {
    name: "App",
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
.faded-in-enter {
    opacity: 0;
}
.faded-in-enter-active {
    transition: opacity 0.5s ease-in-out;
}
</style>
