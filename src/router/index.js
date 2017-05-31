import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/views/LoginPage/LoginPage.vue'
import UserPage from '@/views/UserPage/UserPage.vue'
import RegistePage from '@/views/RegistePage/RegistePage.vue'
Vue.use(Router)
export default new Router({
    routes: [{
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    }, {
        path: '/userpage',
        name: 'UserPage',
        component: UserPage,
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/regist',
        name: 'RegistePage',
        component: RegistePage
    }]
})