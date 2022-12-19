<template>
    <el-form ref="form" label-width="70px" class="login-container" :model="form" :rules="rules" :inline="true">
        <h3 class="login-title">系统登录</h3>
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item style="display:flex; justify-content:center">
            <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import Cookie from 'js-cookie'
import { getMenu } from '../api'
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
            }
        }
    },
    methods: {
        handleLogin() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    getMenu(this.form).then(({ data }) => {
                        console.log(data)
                        if (data.code === 20000) {
                            Cookie.set('token', data.data.token)
                            this.$store.commit('setMenu', data.data.menu)
                            this.$store.commit('addMenu', this.$router)
                            this.$router.push('/home')
                        } else {
                            this.$message.error(data.message)
                        }
                    })
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.login-container {
    width: 350px;
    border: 1px solid #eaeaea;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
    box-sizing: border-box;

    .login-title {
        margin-bottom: 40px;
        text-align: center;
        color: #505458;
    }

    .el-input {
        width: 198px;
    }
}
</style>