import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import addCategory from './components/addCategory';
import addComic from './components/addComic';
import comicslist from './components/comicslist';
import detailsComic from './components/Details';
import signup from './components/signup';
import logIn from './components/logIn';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
import EventBus from '../src/components/EventBus';
 import BootstrapVue from 'bootstrap-vue';
Vue.use(VueRouter, VueAxios, axios, BootstrapVue);
Vue.prototype.$bus = EventBus;


const routes = [
  {
    path:'/comics-manager/add-category',
    name: 'category',
   component:addCategory
  },


  {path:'/comics-manager/add-comic',name: 'comic', component:addComic},
  {path:'/comics-manager/signup', name:'signup', component: signup},
  {path:'/comics-manager/logIn', name:'logIn', component: logIn},
  {path:'/comics-manager/comics',name: 'comics', component:comicslist
  
  /*
  ,children:[{
    path:'/comics-manager/comic/:id',
    name:'detailsComic',
    props: true,
    component:detailsComic
  }]*/
  },

   {path:'/comics-manager/comic/:id',name:'details',component :detailsComic},
 // {path:'/',name: 'comics', component:comicslist}
]

const router = new VueRouter({
  routes: routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
