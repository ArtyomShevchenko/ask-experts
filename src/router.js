import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./Pages/HomePage.vue";
import PagesPage from "./Pages/PagesPage.vue";
import ServicePage from "./Pages/ServicePage.vue";
import WorkPage from "./Pages/WorkPage.vue";
import ContactPage from "./Pages/ContactPage.vue";
import NotFound from "./Pages/NotFound.vue";

const routes = [
  {
    path: "/home",
    alias: '/',
    name: "Home",
    component: HomePage,
  },
  {
    path: "/pages",
    name: "Pages",
    component: PagesPage,
  },
  {
    path: "/service",
    name: "Service",
    component: ServicePage,
  },
  {
    path: "/work",
    name: "Work",
    component: WorkPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
