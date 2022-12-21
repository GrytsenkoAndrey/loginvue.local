import './bootstrap';
import Vue from "vue";

window.Vue = Vue;

import User from "./components/User.vue";
Vue.component('User', User);

new Vue({ el: '#app', render: h => h(User) })
