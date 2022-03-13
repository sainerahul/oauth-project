import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import paths from './router/paths'
import TreeView from "vue-json-tree-view"
Vue.use(TreeView);
Vue.use(VueRouter);

const router = new VueRouter({
  routes:paths,
  mode:'history',
  base:'/'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
