import Vue from 'vue'
import  VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history', // 没有#的模式
    routes, // 注册所有路由
})