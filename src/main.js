import Vue from 'vue'
import App from '@/App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/addon/display/autorefresh.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'codemirror/lib/codemirror.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueCodemirror, { options: {autoRefresh: true} })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
