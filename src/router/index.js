import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {path: "/two", name: "Home", component: () => import("../components/two.vue")},
  {path: "/aa", name: "A", component: () => import("../views/A.vue")},
  {
    path: "/bb",
    name: "B",
    component: () => import("../views/B.vue"),
    children:[
      {
      path:"water",
      component: () => import("../views/product/water.vue"),
      },
      {
      path:"food",
      component: () => import("../views/product/food.vue"),
      },
      {
      path:"3c",
      component: () => import("../views/product/3c.vue"),
      },
  ]
  },
  {path: "/getimg", name: "GetImg", component: () => import("../views/GetImg.vue")},
  {path: "/tonaiveUI", name: "tonaiveUI", component: () => import("../views/naive-ui.vue")},
  {path: "/:domain(.*)*", name: "NotFound", component: () => import("../views/404.vue")},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router