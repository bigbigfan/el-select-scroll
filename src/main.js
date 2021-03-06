// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

// 开发环境
if (process.env.NODE_ENV === 'development') {
  require('./mock/index')
}

Vue.config.productionTip = false
// Vue.directive('loadmore', {
//   bind (el, binding, vnode) {
//     const SELECTWRAP = el.querySelector(
//       '.el-select-dropdown .el-select-dropdown__wrap'
//     )
//     SELECTWRAP.addEventListener('scroll', function () {
//       const CONDITION = this.scrollHeight - this.scrollTop <= this.clientHeight
//       if (CONDITION) {
//         binding.value()
//       }
//     })
//   }
// })
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
