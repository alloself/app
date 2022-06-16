export const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/Login.vue"),
  },
  { path: "/:catchAll(.*)", redirect: { name: "Login" } },
];
