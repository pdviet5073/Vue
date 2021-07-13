import Vue from 'vue'
import store from './store'
import router from './router'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from './i18n';
import App from './App.vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.directive("bg",{
  bind(el, binding){
      let delay = 0
        if(binding.modifiers=="delay"){
          delay =2000
      }
      const arg = binding.arg
      setTimeout(() => {
          el.style[arg] = binding.value
      }, delay);
  }
})


new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
