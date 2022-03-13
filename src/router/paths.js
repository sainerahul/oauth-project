import auth from "../authenitcation/index";
export default [
  {
    path: "/",
    name: "home",
    component: () => import(`@/components/Home.vue`),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import(`@/components/Profile.vue`),
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) next();
      else next({ path: "/unauthorized" });
    },
  },
  {
    path: "/repository",
    name: "repository",
    component: () => import(`@/components/Repository.vue`),
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) next();
      else next({ path: "/unauthorized" });
    },
  },
  {
    path: "/starred-repo",
    name: "starredRepository",
    component: () => import(`@/components/Starred.vue`),
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) next();
      else next({ path: "/unauthorized" });
    },
  },
  {
    path: "/callback",
    name: "callback",
    component: () => import(`@/components/Callback.vue`),
  },
  {
    path: "/unauthorized",
    name: "unauthorized",
    component: () => import(`@/components/UnAuthorized.vue`),
  },
];
