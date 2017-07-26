var Auth = {
  login: function (username, password) {
    if (username === '123' && password === '123') {
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)
      return true
    } else {
      return false
    }
  },

  logout: function () {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    return true
  },

  loginSuccess: function () {
    return ('./home.html')
  },

  logoutSuccess: function () {
    return ('./login.html')
  },

  check: function () {
    if (window.localStorage.getItem('username') === null && window.localStorage.getItem('password') === null) {
      console.log('true')
      return true
    } else {
      console.log('false')
      return false
    }
  },
}


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
