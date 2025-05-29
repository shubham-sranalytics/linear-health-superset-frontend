import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'referral',
      component: () => import("@/pages/PageReferral.vue")
    },
    {
      path: '/messaging',
      name: 'messaging',
      component: () => import("@/pages/PageMessaging.vue")
    },
    {
      path: '/assessment',
      name: 'assessment',
      component: () => import("@/pages/PageAssessment.vue")
    },
    {
      path: '/task',
      name: 'task',
      component: () => import("@/pages/PageTask.vue")
    }
  ]
})

export default router
