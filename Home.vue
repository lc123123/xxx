
<template>
    <div>
        <h1>内容</h1>
        <table class="ct">
            <thead>
                <tr class="head">
                    <th v-for="field in fields">
                        {{field.name}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="body" v-for="person in persons">
                    <td v-for="field in fields">
                        {{person[field.key]}}
                    </td>
                </tr>
            </tbody>
        </table>
    
        <button class="logout" @click="logout()">退出</button>
    </div>
</template>
<script>
import Auth from '../lib/login.js'
import router from '../router'
export default {
    data() {
        return {
            fields: [
                { key: 'sex', name: '性别' },
                { key: 'name', name: '姓名' },
                { key: 'age', name: '年龄' }
                
            ],
            persons: [
                { name: '小明', age: '18', sex: '男' },
                { name: '小红', age: '23', sex: '女' },
                { name: '张三', age: '35', sex: '男' },
                { name: '李四', age: '32', sex: '男' },
                { name: '刘二', age: '23', sex: '女' },
                { name: '王五', age: '23', sex: '男' },
                { name: '西门', age: '38', sex: '男' },
                { name: '二丫', age: '28', sex: '女' },
            ],

        }
    },
    mounted() {
        if (Auth.check()) {
            router.push(Auth.logoutSuccess())
        }
    },
    methods: {
        toggleTabs: function (index) {
            this.nowIndex = index;
        },
        logout() {
            if (Auth.logout()) {
                router.push(Auth.logoutSuccess())
            }
        }
    }

}
</script>
<style>
* {
    margin: 0;
    padding: 0;
}

.head {
    display: flex;
}

.body {
    display: flex;
    flex-wrap: wrap;
}

.body td {
    padding: 5px 50px;
    border: 1px solid #ccc;
    width: 50px;
}

.head th {
    list-style: none;
    flex-direction: column;
    padding: 5px 50px;
    border: 1px solid #ccc;
    width: 50px;
}
</style>
