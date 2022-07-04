import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TheRules from "../views/TheRules.vue";
import TheCongratulation from "../views/TheCongratulation.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "rules",
      component: TheRules,
    },
    {
      path: "/congratulation",
      name: "congratulation",
      component: TheCongratulation,
    },
    {
      path: "/code",
      name: "code",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TheCode.vue"),
    },
  ],
});

export default router;
