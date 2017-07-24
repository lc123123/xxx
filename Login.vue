<template>
    <div id="app">
        <label>用户名</label>
        <input type="text" name="用户名" v-model="username">
        <br>
        <label>密码</label>
        <input type="password" name="密码" v-model="password">
        <br>
        <button class="login" @click="login">登录</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            error: ''
        }
    },
    computed: {

    },
    methods: {
        check: function () {
            if (window.localStorage.getItem('username') === null && window.localStorage.getItem('password') === null) {
                console.log('true')
                return true
            } else {
                console.log('false')
                return false
            }
        },
        loginSuccess: function () {
            this.$router.replace('/home')
        },

        logoutSuccess: function () {
            this.$router.replace('/home')
        },
        login: function (username, password) {
            if (this.username === '123' && this.password === '123') {
                localStorage.setItem('username', username)
                localStorage.setItem('password', password)
                console.log('1')
                this.loginSuccess()
            } else {
                console.log('3')
                return false
            }
        }
    }
}
</script>
