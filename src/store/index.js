import Vue from 'vue'
import Vuex from 'vuex'
// @ts-ignore
import home from './moudles/hoem'
// @ts-ignore
import user from './moudles/user'
Vue.use(Vuex);
const mutations = {};
const actions = {};
const getters = {}

export default new Vuex.Store({
    // @ts-ignore
    
    // @ts-ignore
    mutations,
    // @ts-ignore
    actions,
    // @ts-ignore
    getters,
    modules: {
        home,user
    }
})