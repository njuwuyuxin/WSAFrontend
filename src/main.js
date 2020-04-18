import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'

import App from './App.vue'
import Welcome from './components/Welcome.vue'
import Analyse from './components/Analyse.vue'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

Vue.use(VueRouter);
const router=new VueRouter({
	routes:[
		{path:"/",component:Welcome},
		{path:"/Analyse",component:Analyse},	
	],
	mode:"history"
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
