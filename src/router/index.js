import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import MenuPage from "../views/MenuPage.vue";
import StoryPage from "../views/StoryPage.vue";
import LocationPage from "../views/LocationPage.vue";
import JoinUsPage from "../views/JoinUsPage.vue";
import JoinUsSharedCase from "../views/JoinUsChildren/JoinUsSharedCase.vue";
import JoinUsJoiningRequirements from "../views/JoinUsChildren/JoinUsJoiningRequirements.vue";
import JoinUsJoiningForm from "../views/JoinUsChildren/JoinUsJoiningForm.vue";
import JoinUsJoiningProcess from "../views/JoinUsChildren/JoinUsJoiningProcess.vue";

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
    path: "/location",
    name: "location",
    component: LocationPage,
  },
  {
    path: "/joinus",
    component: JoinUsPage,
    children: [
      {
        path: "",
        component: JoinUsSharedCase,
      },
      {
        path: "sharedcase",
        component: JoinUsSharedCase,
      },
      {
        path: "joiningrequirements",
        component: JoinUsJoiningRequirements,
      },
      {
        path: "joiningform",
        component: JoinUsJoiningForm,
      },
      {
        path: "joiningprocess",
        component: JoinUsJoiningProcess,
      },
    ],
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
