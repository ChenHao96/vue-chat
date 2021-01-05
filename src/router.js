import Vue from 'vue'
import Router from 'vue-router'
import ChatRoom from "./views/ChatRoom"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      meta: {
        title: '聊天室'
      },
      component: ChatRoom
    },
    {
      path: '/chatRoom',
      meta: {
        title: '聊天室'
      },
      component: ChatRoom
    },
  ]
})
