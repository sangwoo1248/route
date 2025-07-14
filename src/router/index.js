import { createRouter, createWebHistory } from "vue-router";

// 페이지 컴포넌트 import
import Home from "@/pages/Home.vue";
import Info from "@/pages/Info.vue";
import Project from "@/pages/Project.vue";
import Content from "@/pages/Content.vue";
import Customer from "@/pages/Customer.vue";
import Supporters from "@/pages/Supporters.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/info", component: Info },
  { path: "/project", component: Project },
  { path: "/content", component: Content },
  { path: "/customer", component: Customer },
  { path: "/supporters", component: Supporters },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
