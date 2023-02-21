import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {path: "/two", name: "Home", component: () => import("../components/two.vue")},
  {path: "/aa", name: "A", component: () => import("../views/A.vue")},
  {path: "/bb", name: "B", component: () => import("../views/B.vue")}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router