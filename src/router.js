import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home"

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            meta: {
                title: '消息'
            },
            component: Home,
        },
        {
            path: '/chatRoom',
            meta: {
                title: '聊天窗口'
            },
            component: () => import('./views/ChatRoom'),
        },
    ]
})
