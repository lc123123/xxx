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
