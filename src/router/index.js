import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TheRules from "../views/TheRules.vue";
import TheCongratulation from "../views/TheCongratulation.vue";
import TheCode from "../views/TheCode.vue";

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
      component: TheCode,
    },
  ],
});

export default router;
