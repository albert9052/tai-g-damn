import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import MenuPage from "../views/MenuPage.vue";
import StoryPage from "../views/StoryPage.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuPage,
  },
  {
    path: "/story",
    name: "story",
    component: StoryPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MainPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
