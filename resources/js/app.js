import './bootstrap';
import Vue from 'vue'
import App from './components/User.vue'

window.Vue = Vue;
Vue.component('User', App);

const app = new Vue({
    el: '#app'
});
