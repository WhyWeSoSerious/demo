// @ts-ignore
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Search from '../views/Search'
export default [
    {
        path: '/',
        component: Home
    },

    {   
        name: "search",
        path: '/search/:keyword?',
        component: Search
    },

    {
        path: '/register',
        component: Register,
        meta: {
            isShow: true
        }
    },

    {
        path: '/login',
        component: Login,
         meta: {
             isShow: true
        }
    }
]