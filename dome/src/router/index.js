import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from "@/vives/index"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../vives/login"),
      meta: { needLogin: false }

    },
    {
      path: '/',
      name: 'index',
      component: index,
      meta: { needLogin: true },


      children: [
        {
          path: '/index',
          name: "index",
          component: () => import("../components/index/index")
        },
        {
          path: '/glinfo',
          name: "glinfo",
          component: () => import("../components/myinfo/glinfo")
        },
        {
          path: '/zmt',
          name: "zmt",
          component: () => import("../components/zimouti/zmt")
        },
        {
          path: '/zb',
          name: "zb",
          component: () => import("../components/zhibo/zhibo")
        },
        {
          path: '/xc',
          name: "xc",
          component: () => import("../components/xc/xc")
        },
        {
          path: '/vx',
          name: "vx",
          component: () => import("../components/vx/vx")
        }

      ]
    }
  ]
})
