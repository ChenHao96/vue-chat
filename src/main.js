import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import sclab from "./sclab"

Vue.config.productionTip = false

if (undefined === window.sclab) {
    window.sclab = sclab
    sclab.screenOrientation("portrait")
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
