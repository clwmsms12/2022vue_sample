import { createRouter,createWebHistory } from 'vue-router'

import HomeView from '@/components/HomeView.vue'
import SubPage0101 from '@/components/SubPage0101.vue'

const routes = [
    {
        path:'/',
        name:'home',
        component:HomeView,
    },
    {
        path:'/sub0101',
        name:'sub0101',
        component:SubPage0101,
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes,
})

export default router