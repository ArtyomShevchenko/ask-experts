import { createRouter, createWebHistory } from "vue-router";

// routes views
import HomePage from "./Pages/HomePage.vue";
import PagesPage from "./Pages/PagesPage.vue";
import ServicesPage from "./Pages/ServicesPage.vue";
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
    path: "/services",
    name: "Services",
    component: ServicesPage,
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
