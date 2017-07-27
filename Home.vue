<template>
    <div class="table-ct">
        <h1>内容</h1>
        <a>
            <el-button type="primary" size="small" @click="user">用户</el-button>
            <el-button type="primary" size="small" @click="author">作者</el-button>
        </a>
        <table class="ct">
            <thead>
                <tr class="head">
                    <th v-for="header in header">
                        {{header.name}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="body" v-for="showpage in showPage">
                    <td v-for="header in header">
                        {{showpage[header.key]}}
                    </td>
                </tr>
            </tbody>
            <tfoot>
    
            </tfoot>
        </table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="this.pageSize" layout="total, prev, pager, next, jumper" :total="this.content.length">
        </el-pagination>
        <button class="logout" @click="logout()">退出</button>
    </div>
</template>
<script>
import Auth from '../lib/login.js'
import router from '../router'
export default {
    data() {
        return {
            currentPage: 1,
            //默认每页数据量
            pageSize: 7,
            //表格当前页数据
            showPage: [],
            content: [],
            header: [],
            fields: [
                { key: 'name', name: '姓名' },
                { key: 'sex', name: '性别' },
                { key: 'age', name: '年龄' },
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
                { name: '小明', age: '18', sex: '男' },
                { name: '小红', age: '23', sex: '女' },
                { name: '张三', age: '35', sex: '男' },
                { name: '李四', age: '32', sex: '男' },
                { name: '刘二', age: '23', sex: '女' },
                { name: '王五', age: '23', sex: '男' },
                { name: '西门', age: '38', sex: '男' },
            ],
            fields2: [
                { key: 'title', name: '标题' },
                { key: 'author', name: '作者' },
                { key: 'time', name: '时间' },
                { key: 'state', name: '状态' },
            ],
            main: [
                { title: '一', author: '小明', time: '2012-02-21', state: '完成' },
                { title: '二', author: '小红', time: '2011-11-31', state: '未完成' },
                { title: '三', author: '李四', time: '2004-03-11', state: '完成' },
                { title: '四', author: '二丫', time: '2013-07-12', state: '完成' },
                { title: '五', author: '小红', time: '2011-12-17', state: '未完成' },
                { title: '六', author: '李四', time: '2016-05-01', state: '未完成' },
                { title: '七', author: '王五', time: '2017-05-06', state: '完成' },
                { title: '八', author: '西门', time: '2011-04-26', state: '完成' },
                { title: '九', author: '刘二', time: '2033-02-21', state: '完成' },
                { title: '十', author: '小明', time: '2023-06-13', state: '未完成' },
                { title: '十一', author: '刘二', time: '2001-10-30', state: '完成' },
                { title: '十二', author: '刘六', time: '2013-11-21', state: '未完成' },
                { title: '十三', author: '张七', time: '2016-06-15', state: '未完成' },
                { title: '十四', author: '胡八', time: '2017-04-20', state: '完成' },
                { title: '十五', author: '赵九', time: '2013-02-22', state: '完成' },
                { title: '十六', author: '刘二', time: '2033-02-21', state: '完成' },
                { title: '十七', author: '小明', time: '2023-06-13', state: '未完成' },
                { title: '十八', author: '刘二', time: '2001-10-30', state: '完成' },
                { title: '十九', author: '刘六', time: '2013-11-21', state: '未完成' },
                { title: '二十', author: '张七', time: '2016-06-15', state: '未完成' },
                { title: '二十一', author: '胡八', time: '2017-04-20', state: '完成' },
                { title: '二十二', author: '赵九', time: '2013-02-22', state: '完成' },
            ],
        }
    },
    mounted() {
        if (Auth.check()) {
            router.push(Auth.logoutSuccess())
        };
        this.header = this.fields
        this.content = this.persons
        this.handleCurrentChange(1)
    },
    methods: {
        user() {
            this.header = this.fields
            this.content = this.persons
            this.showPage = this.handleCurrentChange(1)
            console.log(this.currentPage)
        },
        author() {
            this.header = this.fields2
            this.content = this.main
            this.showPage = this.handleCurrentChange(1)
            console.log(this.currentPage)
        },

        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(page) {
            this.currentPage = page
            return (this.showPage = this.content.slice((page - 1) * this.pageSize, (page * this.pageSize)))
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
.table-ct {
    display: flex;
    flex-direction: column;
    align-items: center
}

table {
    height: 400px;
}

* {
    margin: 0;
    padding: 0;
}

.el-pagination {
    margin: 10px;
}

button {
    width: 50px;
}

.logout {
    margin-top: 20px;
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







<template>
    <div class="table-ct">
        <h1>内容</h1>
        <a>
            <el-button type="primary" size="small" @click="user" v-for="button in config">{{button.button}}</el-button>
            <!--<el-button type="primary" size="small" @click="author">作者</el-button>-->
        </a>
        <table class="ct">
            <thead>
                <tr class="head">
                    <th v-for="header in header">
                        {{header.name}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="body" v-for="showpage in showPage">
                    <td v-for="header in header">
                        {{showpage[header.key]}}
                    </td>
                </tr>
            </tbody>
            <tfoot>
    
            </tfoot>
        </table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="this.pageSize" layout="total, prev, pager, next, jumper" :total="this.content.length">
        </el-pagination>
        <button class="logout" @click="logout()">退出</button>
    </div>
</template>
<script>
import Auth from '../lib/login.js'
import router from '../router'
export default {
    data() {
        return {
            currentPage: 1,
            //默认每页数据量
            pageSize: 7,
            //表格当前页数据
            showPage: [],
            content: [],
            header: [],

            config: {
                user: {
                    button: '用户',
                    fields: [
                        { key: 'name', name: '姓名' },
                        { key: 'sex', name: '性别' },
                        { key: 'age', name: '年龄' },
                    ],
                    data: [
                        { name: '小明', age: '18', sex: '男' },
                        { name: '小红', age: '23', sex: '女' },
                        { name: '张三', age: '35', sex: '男' },
                        { name: '李四', age: '32', sex: '男' },
                        { name: '刘二', age: '23', sex: '女' },
                        { name: '王五', age: '23', sex: '男' },
                        { name: '西门', age: '38', sex: '男' },
                        { name: '二丫', age: '28', sex: '女' },
                        { name: '小明', age: '18', sex: '男' },
                        { name: '小红', age: '23', sex: '女' },
                        { name: '张三', age: '35', sex: '男' },
                        { name: '李四', age: '32', sex: '男' },
                        { name: '刘二', age: '23', sex: '女' },
                        { name: '王五', age: '23', sex: '男' },
                        { name: '西门', age: '38', sex: '男' },
                    ],
                },
                main: {
                    button: '内容',
                    fields: [
                        { key: 'title', name: '标题' },
                        { key: 'author', name: '作者' },
                        { key: 'time', name: '时间' },
                        { key: 'state', name: '状态' },
                    ],
                    data: [
                        { title: '一', author: '小明', time: '2012-02-21', state: '完成' },
                        { title: '二', author: '小红', time: '2011-11-31', state: '未完成' },
                        { title: '三', author: '李四', time: '2004-03-11', state: '完成' },
                        { title: '四', author: '二丫', time: '2013-07-12', state: '完成' },
                        { title: '五', author: '小红', time: '2011-12-17', state: '未完成' },
                        { title: '六', author: '李四', time: '2016-05-01', state: '未完成' },
                        { title: '七', author: '王五', time: '2017-05-06', state: '完成' },
                        { title: '八', author: '西门', time: '2011-04-26', state: '完成' },
                        { title: '九', author: '刘二', time: '2033-02-21', state: '完成' },
                        { title: '十', author: '小明', time: '2023-06-13', state: '未完成' },
                        { title: '十一', author: '刘二', time: '2001-10-30', state: '完成' },
                        { title: '十二', author: '刘六', time: '2013-11-21', state: '未完成' },
                        { title: '十三', author: '张七', time: '2016-06-15', state: '未完成' },
                    ]
                },

            }
        }
    },
    mounted() {
        if (Auth.check()) {
            router.push(Auth.logoutSuccess())
        };
        this.header = this.fields
        this.content = this.persons
        this.handleCurrentChange(1)
    },
    methods: {
        user() {
            this.header = this.fields
            this.content = this.persons
            this.showPage = this.handleCurrentChange(1)
            console.log(this.currentPage)
        },
        author() {
            this.header = this.fields2
            this.content = this.main
            this.showPage = this.handleCurrentChange(1)
            console.log(this.currentPage)
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(page) {
            this.currentPage = page
            return (this.showPage = this.content.slice((page - 1) * this.pageSize, (page * this.pageSize)))
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
.table-ct {
    display: flex;
    flex-direction: column;
    align-items: center
}

table {
    height: 400px;
}

* {
    margin: 0;
    padding: 0;
}

.el-pagination {
    margin: 10px;
}

button {
    width: 50px;
}

.logout {
    margin-top: 20px;
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
