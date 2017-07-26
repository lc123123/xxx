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
                <tr class="body" v-for="person in all">
    
                    <td v-for="field in fields">
                        {{person[field.key]}}
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="this.pageItem" layout="total, prev, pager, next, jumper" :total="this.persons.length">
                </el-pagination>
            </tfoot>
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
            //表格当前页数据
            tableData: [],
            //默认每页数据量
            pagesize: 10,
            //默认数据总数
            totalCount: 1000,

            currentPage: 1,
            pageItem: 5,
            all: [],
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
                { name: '二丫', age: '28', sex: '女' },
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
        };
        for (var i = 0; i < 5; i++) {
            var allPersons = this.persons[i]
            this.all.push(allPersons)
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {

            this.persons.slice((val - 1) * 5, (val - 1) * 5 + 5)
            //页数
            //一页5条
            //页数++
            console.log(val)
            this.all = []
            for (var i = (val + 5); i < (val + 10); i++) {
                var allPersons = this.persons[i]
                this.all.push(allPersons)
            }
            //  this.all.push(this.persons.slice(6,10))
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
