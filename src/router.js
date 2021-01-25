import Vue from 'vue'
import store from './store'
import Router from 'vue-router'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

const routes = [
    {
        path: '/404',
        meta: {
            title: '页面丢失',
            top: true
        },
        component: NotFound
    },
    {
        path: '/',
        meta: {
            title: '消息',
            top: true
        },
        component: Home
    },
    {
        path: '/friends',
        meta: {
            title: '联系人',
            top: true
        },
        component: () => import('./views/Friends')
    },
    {
        path: '/logs',
        meta: {
            title: '动态',
            top: true
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
        path: '/user-setting',
        meta: {
            title: '用户设置'
        },
        component: () => import('./views/second/UserSetting')
    },
    {
        path: '/logs-setting',
        meta: {
            title: '动态页设置'
        },
        component: () => import('./views/second/LogsSetting')
    },
    {
        path: '/friends.test',
        meta: {
            title: '测试页1'
        },
        component: () => import('./views/second/Test1')
    },
    {
        path: '/friends.test.test',
        meta: {
            title: '测试页2'
        },
        component: () => import('./views/second/Test2')
    }
]

const processPathFunc = (function () {

    const cachePathMap = {}
    for (let i = 0; i < routes.length; i++) {
        cachePathMap[routes[i].path] = true
    }

    return function (to, from, next) {
        if (undefined !== cachePathMap[to.path]) {
            store.commit("lastRequestPath", from.fullPath)
            if (undefined !== to.meta.top && to.meta.top) {
                store.commit("clearPath")
            }
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