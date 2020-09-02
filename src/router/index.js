import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入主面板
import LayOut from "./../views/layout/LayOut.vue";

Vue.use(VueRouter);

const routes = [
    { path: '/login', name: 'login', component: () => import('@/views/login/index.vue') },
    {
        path: '/',
        name: 'layOut',
        component: LayOut,
        redirect: '/home',
        children: [
            { path: '/home', name: "home", component: ()=>import('@/views/home/index.vue') }
            ,
        ],
    },
    { path: '*', name: "notFound", component: () => import('@/views/not-found.vue')}
];

const router = new VueRouter({
    routes
});

export default router
