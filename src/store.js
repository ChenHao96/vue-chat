import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        back_path: false,
        last_request_path: []
    },
    mutations: {
        lastRequestPath(state, path) {
            if (!state.back_path) {
                state.last_request_path.push(path)
            }
            state.back_path = false
        },
        clearPath(state) {
            state.last_request_path = []
            state.back_path = false
        },
        backPath(state) {
            state.back_path = true
        }
    },
    actions: {}
})
