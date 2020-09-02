<template>
    <el-header>
        <div>
            <img src="./../../../assets/images/logo.png" alt="图标" width="60">
            <h2>学猿后台管理系统</h2>
        </div>
        <el-button type="danger" @click="logout">退出</el-button>
    </el-header>
</template>

<script>
    export default {
        name: "nav-bar",
        methods: {
            logout() {
                this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });
            },
        },
    }
</script>

<style scoped lang="less">
    .el-header {
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        >div {
            display: flex;
            align-items: center;
            margin-left: 15px;
            h2 {
                margin-left: 20px;
            }
        }
    }
</style>