import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import './assets/iconfont/iconfont.css'
import Card from './components/Card.vue'
import ListCard from './components/ListCard.vue'
import axios from 'axios'

Vue.config.productionTip = false

Vue.component('m-card', Card)
Vue.component('m-list-card', ListCard)

Vue.use(VueAwesomeSwiper /* { default options with global component } */)

// axios 请求数据 下面 url 为接口数据
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api'
  // baseURL: 'http://localhost:3000/web/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
