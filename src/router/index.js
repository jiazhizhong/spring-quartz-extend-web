import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import JobList from '../views/JobList.vue'

Vue.use(VueRouter)

// 定义路由
const routes = [
    {
        path: '/',
        component: Main,
        name: 'Main',
        label: '主页',
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home.vue',
                component: Home
            },
            {
                path: '/joblist',
                name: 'joblist',
                label: '任务列表',
                icon: 's-order',
                url: 'JobList.vue',
                component: JobList
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        label: '登录页',
        url: 'Login.vue',
        component: Login,
    }
]

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router