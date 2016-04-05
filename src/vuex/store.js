import Vue from 'vue'
import Vuex from 'vuex'
import demo from './modules/demo'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    demo
  },
  strict: debug
})
