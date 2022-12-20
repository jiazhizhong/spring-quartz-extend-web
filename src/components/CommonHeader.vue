<template>
    <div class="header-container">
        <div class="l-content">
            <el-button style="margin-right: 20px" @click="collapseMenu()" icon="el-icon-menu" size="mini"></el-button>
            <!-- 面包屑 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">
                    {{ item.label }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/user.png" alt="user img" />
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Cookie from 'js-cookie'
import { logout } from '../api'
export default {
    data() {
        return {}
    },
    methods: {
        collapseMenu() {
            this.$store.commit('collapseMenu')
        },
        handleCommand(command) {
            if (command === 'logout') {
                logout().then(({ data }) => {
                    if (data.status === 0) {
                        Cookie.remove('token')
                        Cookie.remove('menu')
                        this.$router.push({ name: 'login' })
                    } else {
                        this.$message.error(data.message)
                    }
                }).catch((err) => {
                    console.log(err)
                    this.$message.error('系统繁忙，请稍后重试~')
                })
            }
        }
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabsList
        })
    },
}
</script>

<style lang="less" scoped>
.header-container {
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }

    .r-content {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }

    .l-content {
        display: flex;
        align-items: center;

        /deep/.el-breadcrumb__item {
            .el-breadcrumb__inner {
                font-weight: normal;

                &.is-link {
                    color: #666;
                }
            }

            &:last-child {
                .el-breadcrumb__inner {
                    color: #fff
                }
            }
        }
    }
}
</style>