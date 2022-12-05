import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage/index.vue'
import RegistrationPage from '@/pages/RegistrationPage/index.vue'
import PersonalAreaPage from '@/pages/PersonalAreaPage/index.vue'
import AuthorizationPage from '@/pages/AuthorizationPage/index.vue'
import EducationPage from '@/pages/EducationPage/index.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/registration',
    name: 'RegistrationPage',
    component: RegistrationPage
  },
  {
    path: '/personalArea',
    name: 'PersonalAreaPage',
    component: PersonalAreaPage
  },
  {
    path: '/authorization',
    name: 'AuthorizationPage',
    component: AuthorizationPage
  },
  {
    path: '/education',
    name: 'EducationPage',
    component: EducationPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
