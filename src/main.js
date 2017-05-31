// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Validator from 'vue-validator'
import VueResource from 'vue-resource'
import '@/assets/reset.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Validator)
Vue.use(VueResource)
import userService from '@/service/user.service.js'
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (userService.isLogin) {
            next();
        } else {
            router.push('login');
            next();
        }
    }
    next();
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    isLogin: false
})