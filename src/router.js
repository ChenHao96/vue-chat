import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home"

Vue.use(Router)

const routes = [
    {
        path: '/404',
        meta: {
            title: '页面丢失了'
        },
        component: () => import('./views/tmp')
    },
    {
        path: '/',
        meta: {
            title: '消息'
        },
        component: Home
    },
    {
        path: '/friends',
        meta: {
            title: '联系人'
        },
        component: () => import('./views/Friends')
    },
    {
        path: '/logs',
        meta: {
            title: '动态'
        },
        component: () => import('./views/Logs')
    },
    {
        path: '/chatRoom',
        meta: {
            title: '聊天窗口'
        },
        component: () => import('./views/second/ChatRoom')
    },
    {
        path: '/userInfoSetting',
        meta: {
            title: '设置'
        },
        component: () => import('./views/second/UserInfoSetting')
    },
    {
        path: '/logsSetting',
        meta: {
            title: '设置'
        },
        component: () => import('./views/second/LogsSetting')
    }
]

const processPathFunc = (function () {
    const cachePathMap = {}
    for (let i = 0; i < routes.length; i++) {
        cachePathMap[routes[i].path] = true
    }

    return function (to, from, next) {
        if (undefined !== cachePathMap[to.path]) {
            document.title = to.meta.title
            next()
        } else {
            next({path: '/404'})
        }
    }
})()

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})

router.beforeEach(processPathFunc)
export default router