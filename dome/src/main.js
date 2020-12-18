// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css"
import { from } from 'core-js/fn/array';
import Vuex from "vuex"
import store from "./store"
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Vuex,
  components: { App },
  template: '<App/>'
})
//路由守卫-方法一缓存
/*
router.beforeEach((to, from, next) => {
  if (window.sessionStorage.data) {
    console.log(window.sessionStorage);
    console.log(to.path) //每次跳转的路径
    if (to.path === '/') {
      //登录状态下 访问login.vue页面 会跳到index.vue
      next({ path: '/index' });
    } else {
      next();
    }
  }
  else {
    if (to.path === '/') { // 如果是登录页面的话，直接next() -->解决注销后的循环执行bug
      next();
    } else { // 否则 跳转到登录页面
      next({ path: '/' });
    }
  }
})*/
//路由守卫-方法二-Vuex状态管理
router.beforeEach((to, from, next) => {
  console.log(store.state.userinfo);
  if (store.state.userinfo) {
    if (to.path === "/") {
      next({ path: "/index" });
    }
    else {
      next();
    }

  }
  else {
    if (to.path === "/") {
      next();
    } else {
      next({ path: '/' });
    }
  }
})
