import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue')
    },
    {
        path: '/property',
        name: 'property',
        component: () => import('@/views/PropertyView.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/BlogView.vue')
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('@/views/ContactsView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
