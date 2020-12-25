import {reqCategoryList,reqBannerList} from '@/api'
//todo 获取轮播图列表

const state = {
    //?首页三级列表
    categoryList: [],
    //?轮播列表
    bannerList:[]
}
const mutations = {
    RECEIVE_CATEGORYLIST_LIST(state, categoryList) {
        state.categoryList = categoryList.splice(0,15)
    },
    //todo 轮播
    RECEIVE_BANNER_LIST(state, bannerList) {
        state.bannerList = bannerList
    }
    
}
const actions = {
    async getCategoryList({commit}) {
        const result =await reqCategoryList();
        if (result.code === 200) {
            const categoryList = result.data;
            commit('RECEIVE_CATEGORYLIST_LIST', categoryList)
        }
    },
    //todo 轮播
    async getBannerList({ commit }) {
        console.log('aa')
        const result = await reqBannerList();
        if (result.code === 200) {
            const bannerList = result.data;
            commit('RECEIVE_BANNER_LIST',bannerList)
        }
    }
} 
const getters = {}
export default {
    getters, actions, mutations, state
}
//todo 广告图标列表
