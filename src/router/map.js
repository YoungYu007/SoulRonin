import { UserLayout, BasicLayout } from '@/layout'

const routes = [
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '',
        redirect: { name: 'login' }
      },
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpacjChunkName: "login" */ '^/user/Login.vue'),
        meta: {
          title: 'Sign In'
        }
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */ '^/user/Register.vue'),
        meta: {
          title: 'Sign Up'
        }
      }
    ]
  },
  {
    path: '/basic',
    component: BasicLayout,
    children: [
      {
        path: '',
        redirect: { name: 'index' }
      },
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '^/index'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/picture',
        name: 'picture',
        component: () => import(/* webpackChunkName: "picture" */ '^/picture'),
        meta: {
          title: '美图'
        }
      },
      {
        path: '/video',
        name: 'video',
        component: () => import(/* webpackChunkName: "video" */ '^/video'),
        meta: {
          title: '短视频'
        }
      },
      {
        path: '/collection',
        name: 'collection',
        component: () => import(/* webpackChunkName: "collection" */ '^/collection'),
        meta: {
          title: '个人收藏'
        }
      },
      {
        path: '/zone',
        name: 'zone',
        component: () => import(/* webpackChunkName: "zone" */ '^/zone'),
        meta: {
          title: '空间'
        }
      }
    ]
  },
  {
    path: '*',
    redirect: { name: 'login' }
  }
]

export default routes