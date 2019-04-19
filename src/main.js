import Vue from 'vue'
import App from './App.vue'
import VShowSlide from 'v-show-slide'

Vue.config.productionTip = false

Vue.use(VShowSlide)

new Vue({
  render: h => h(App),
}).$mount('#app')
