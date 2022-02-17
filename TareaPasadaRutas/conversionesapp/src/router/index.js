import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Almacenamiento from "@/views/Almacenamiento.vue";
import Longitud from "@/views/Longitud.vue";
import Masa from "@/views/Masa.vue"
import Moneda from "@/views/Moneda.vue"
import Tiempo from "@/views/Tiempo.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/Almacenamiento",
    name:"Almacenamiento",
    component: Almacenamiento
  },
  {
    path:"/Longitud",
    name:"Longitud",
    component: Longitud
  },
  {
    path:"/Masa",
    name:"Masa",
    component: Masa
  },
  {
    path:"/Moneda",
    name:"Moneda",
    component: Moneda
  },
  {
    path:'/Tiempo',
    name:'Tiempo',
    component: Tiempo
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "@/views/About.vue");
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
