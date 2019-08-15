import Vue from 'vue';
import App from './App.vue';
import VueBus from 'vue-bus';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VeLine from 'v-charts/lib/line.common';
import router from '@/router/index';

import utils from '@/utils/utils';
Vue.prototype.utils = utils;

Vue.use(VueBus);
Vue.use(ElementUI);
Vue.component(VeLine.name, VeLine)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
