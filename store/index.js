//Главный store

import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import lot from './modules/lot'
Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        users,
        lot
    }
})

export default store
