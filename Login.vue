
import router from '../router'
import axios from 'axios'
import md5 from 'js-md5'

export default {
  login: function (username, password) {
    if (username === 'admin' && password === 'admin') {

      var params = new URLSearchParams();
      params.append('username', username);
      params.append('password', md5(password))
      axios.post('http://192.168.1.239/iron_wall/admin/test/login', params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then((res) => {
          console.log(res);
          console.log(res.data.data);

        })
        .catch( (error)=> {
          console.log(error);
        });
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)
      return true
    } else {
      return false
    }
  },

  viewdata: function () {

  },

  logout: function () {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    return true
  },

  loginSuccess: function () {
    return ('Home')
  },

  logoutSuccess: function () {
    return ('/')
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
