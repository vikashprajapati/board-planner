import Vue from "vue";
import VueRouter from "vue-router";
import Board from "@/views/Board.vue";
import Task from "@/views/Task.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "board",
        component: Board,
        children: [
            {
                path: "task/:id",
                name: "task",
                component: Task
            }
        ]
    },
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/signup",
        name: "signup",
        component: Signup
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
