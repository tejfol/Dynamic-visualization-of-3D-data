import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/Home.vue"),
  },
  // {
  //     path: '/about',
  //     name: 'About',
  //     component: () => import('./components/About.vue'),
  // },
];
const router = new VueRouter({
  mode: "history",
  routes, // short for `routes: routes`
});

export default router;
