import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@views/Home'
import Order from '@views/Order'
import Treasure from '@views/Treasure'
import Footprint from '@views/Footprint'
import Collect from '@views/Collect'
import Publish from '@views/Publish'
import Apply from '@views/Apply'
import Download from '@views/Download'
import Look from '@views/Look'
import Life from '@views/Life'
import HotList from '@com/common/list/HotList'
import HomeTv from '@com/common/tv/HomeTv'

const routes = [
    {
        path: '/',
        redirect: { name: 'home'}
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/order',
        name: 'order',
        component: Order
    },
    {
        path: '/treasure',
        name: 'treasure',
        component: Treasure
    },
    {
        path: '/footprint',
        name: 'footprint',
        component: Footprint
    },
    {
        path: '/collect',
        name: 'collect',
        component: Collect
    },
    {
        path: '/publish',
        name: 'publish',
        component: Publish
    },
    {
        path: '/apply',
        name: 'apply',
        component: Apply
    },
    {
        path: '/download',
        name: 'download',
        component: Download
    },
    {
        path: '/look',
        name: 'look',
        component: Look
    },
    {
        path: '/life',
        name: 'life',
        component: Life
    },
    {
        path: '/list',
        name: 'list',
        component: HotList,
    },
    {
        path: '/tv',
        name: 'tv',
        component: HomeTv
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
  })

export default router