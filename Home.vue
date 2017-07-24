<template>
    <div>
        <h1>内容</h1>
        <button class="logout" @click="logout">退出</button>
    </div>
</template>
<script>
export default {
    methods: {
        logout: function () {
            localStorage.removeItem('username')
            localStorage.removeItem('password')
            this.logoutSuccess()
        },
        loginSuccess: function () {
            this.$router.replace('/Login')
        },

        logoutSuccess: function () {
            this.$router.replace('/Login')
        },
    }
}
</script>
