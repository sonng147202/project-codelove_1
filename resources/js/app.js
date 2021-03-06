require("./bootstrap");

import "es6-promise/dist/es6-promise.auto";
import axios from "axios";
import Vue from "vue";
import VueAuth from '@websanova/vue-auth/src/v2'
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import Index from "./Index";
import { configAuth } from './auth'
import router from "./router";
import store from "./store/index";

// Set Vue globally
window.Vue = Vue

// Set Vue router
Vue.router = router;
Vue.use(VueRouter);

// Set Vue authentication
Vue.use(VueAxios, axios);
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api/v1`;

configAuth.plugins = {
    http: Vue.axios,
    router: Vue.router,
}

Vue.use(VueAuth, configAuth);

const app = new Vue({
    router,
    store,
    render: (h) => h(Index),
});

app.$mount("#root");
