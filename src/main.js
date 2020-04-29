import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import App from './App.vue'
import Welcome from './components/Welcome.vue'
import Analyse from './components/Analyse.vue'
import ResultPage from './components/ResultPage.vue'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

Vue.use(VueRouter);
const router=new VueRouter({
	routes:[
		{path:"/",component:Welcome},
		{path:"/FileAnalyse",component:Analyse},	
		{
			path:"/ResultPage",
			name:"ResultPage",
			component:ResultPage
		},	
	],
	mode:"history"
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
