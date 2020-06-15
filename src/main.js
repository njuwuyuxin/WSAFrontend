import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import cookies from 'vue-cookies'
import 'http'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import App from './App.vue'
import Welcome from './components/Welcome.vue'
import Analyse from './components/Analyse.vue'
import OnlineAnalyse from './components/OnlineAnalyse.vue'
import ResultPage from './components/ResultPage.vue'
import FilePage from './components/FilePage.vue'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$cookies = cookies;
axios.defaults.withCredentials = true;
Vue.use(VueRouter);
const router=new VueRouter({
	routes:[
		{path:"/",component:Welcome},
		{
			path:"/FileAnalyse",
			name:"FileAnalyse",
			component:Analyse
		},	
		{path:"/OnlineAnalyse",component:OnlineAnalyse},	
		{
			path:"/ResultPage",
			name:"ResultPage",
			component:ResultPage
		},
		{
			path:"/FilePage",
			name:"FilePage",
			component:FilePage
		},
	],
	mode:"history"
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
