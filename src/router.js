import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

const routes = [
    {
        path: '/404',
        meta: {
            title: '页面丢失'
        },
        component: NotFound
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
        path: '/search',
        meta: {
            title: '搜索'
        },
        component: () => import('./views/second/Search')
    },
    {
        path: '/userSetting',
        meta: {
            title: '用户设置'
        },
        component: () => import('./views/second/UserSetting')
    },
    {
        path: '/logsSetting',
        meta: {
            title: '动态页设置'
        },
        component: () => import('./views/second/LogsSetting')
    },
]

const processPathFunc = (function () {

    const cachePathMap = {}
    for (let i = 0; i < routes.length; i++) {
        cachePathMap[routes[i].path] = true
    }

    return function (to, from, next) {
        if (undefined !== cachePathMap[to.path]) {
            sessionStorage.setItem("lastRequestPagePath", from.fullPath)
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