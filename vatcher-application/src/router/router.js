import {createRouter, createWebHashHistory} from 'vue-router'
import Survey from '../views/Survey.vue'
import Abnormal from '../views/Abnormal.vue'
import Performance from '../views/Performance.vue'
import Behavior from '../views/Behavior.vue'
import Request from '../views/Request.vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/survey' },
    { path: '/survey', component: Survey },
    { path: '/abnormal', component: Abnormal },
    { path: '/performance', component: Performance },
    { path: '/behavior', component: Behavior },
    { path: '/request', component: Request }
  ]
})

export default router