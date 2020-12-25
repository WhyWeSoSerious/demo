// @ts-ignore
import Home from '../views/Home'
// @ts-ignore
import Login from '../views/Login'
// @ts-ignore
import Register from '../views/Register'
// @ts-ignore
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