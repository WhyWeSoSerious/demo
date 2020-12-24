import reqCategoryList from '@/api'
const state = {
    categoryList: []
}
const mutations = {
    receive_categoryList_list(state, categoryList) {
        state.categoryList = categoryList.splice(0,15)
    }
}
const actions = {
    async getCategoryList({commit}) {
        const result =await reqCategoryList();
        if (result.code === 200) {
            const categoryList = result.data;
            commit('receive_categoryList_list', categoryList)
        }
    }
} 
const getters = {}
export default {
    getters, actions, mutations, state
}