import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./components/HelloWorld.vue"),
  },
  // {
  //     path: '/about',
  //     name: 'About',
  //     component: () => import('./components/About.vue'),
  // },
];
const router = new VueRouter({
  routes, // short for `routes: routes`
});

export default router;
