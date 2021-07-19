import Vue from "vue";
import VueRouter , { RouteConfig }from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import PrivateLayout from "../layouts/PrivateLayout.vue";
import {user}  from "../types"

Vue.use(VueRouter);



const routes: Array<RouteConfig> = [
    {
        path: "/login",
        name: "Login",
        component: ()=>  import(/* webpackChunkName: "Login" */ "../components/Login.vue"),
        meta: { layout: DefaultLayout },
    },
    {
        path: "/",
        name: "ToDo",
        component: () => import(/* webpackChunkName: "Todo" */ "../components/Todo.vue"),
        meta: { layout: DefaultLayout },
    },
    {
        path: "/todo/:id",
        name: "Detail",
        component: () => import(/* webpackChunkName: "Detail" */ "../components/Detail.vue"),
        meta: { layout: DefaultLayout },
    },
    {
        path: "/form",
        name: "Form",
        component: () => import(/* webpackChunkName: "TodoForm" */ "../components/TodoForm.vue"),
        meta: { layout: DefaultLayout },
    },
    {
        path: "/cart",
        name: "Cart",
        component: () => import(/* webpackChunkName: "Cart" */ "../components/Cart.vue"),
        meta: {
            layout: DefaultLayout,
            requiresAuth: true,
        },
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import(/* webpackChunkName: "Admin" */ "../components/Admin.vue"),
        meta: { layout: PrivateLayout, requiresAuth: true, isAdmin: true },
    },
    { path: "*", redirect: "/" },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    const authRequired :Boolean = to.matched.some((x) => x.meta.requiresAuth);
    const isAdmin: Boolean = to.matched.some((x) => x.meta.isAdmin);
    const loggedIn: user = JSON.parse(localStorage.getItem("auth")!);
    if (!loggedIn) {
        if (authRequired) {
            return next("/login");
        }
        else next();
    } else {
        if (to.path == "/login") return next("/");

        if (authRequired && isAdmin) {
            if (loggedIn?.rules === "admin") next();
            else next("/");
        } else next();
    }
});
export default router;
