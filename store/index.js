//Главный store

import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import parts from './modules/parts'
import lots from './modules/lots'
Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        users,
        parts,
        lots
    }
})

export default store
