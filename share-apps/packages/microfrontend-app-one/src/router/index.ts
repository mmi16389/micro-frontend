import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router