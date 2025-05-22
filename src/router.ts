import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/pages/PageHome.vue")
    },
    {
      path: '/messaging',
      name: 'messaging',
      component: () => import("@/pages/PageMessaging.vue")
    },
    {
      path: '/messaging-error',
      name: 'messaging-error',
      component: () => import("@/pages/PageMessagingError.vue")
    },
    {
      path: '/assessment',
      name: 'assessment',
      component: () => import("@/pages/PageAssessment.vue")
    },
    {
      path: '/assessment-error',
      name: 'assessment-error',
      component: () => import("@/pages/PageAssessmentError.vue")
    },
    {
      path: '/task',
      name: 'task',
      component: () => import("@/pages/PageTask.vue")
    },
    {
      path: '/error',
      name: 'error',
      component: () => import("@/pages/PageError.vue")
    }
  ]
})

export default router
