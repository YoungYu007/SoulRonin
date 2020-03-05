import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './map.js'
import { setDocumentTitle, domTitle } from '../utils/domUtil.js'

Vue.use(VueRouter)

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

router.beforeEach((to, from, next) => {
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${domTitle} - ${to.meta.title}`))
  next()
})



export default router
