import Vue from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'
import VueSmoothScroll from 'vue2-smooth-scroll'


Vue.use(VueSmoothScroll, {
  offset: 0,           // offset in px from scroll element, can be positive or negative
  container: '',       // selector string or Element for scroll container, default is window
  updateHistory: true,  // whether to push hash to history
  easingFunction: 'easeOutQuad'
})
Vue.use(VueTypedJs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
