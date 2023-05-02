// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import store from "./store";
import * as filters from "./filters";

Vue.config.productionTip = true;
Vue.config.performance = true;

// register global filters
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store: store,
  render: (h) => h(App),
});
