import Vue from 'vue';

import 'normalize.css/normalize.css';
// 引入字体图标
import '@/styles/fonts/iconfont.css';

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-CN';


import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(ElementUI, {locale});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
