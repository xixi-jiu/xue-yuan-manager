<template>
    <div>
        <el-card class="box-card">
            <el-form ref="loginForm">
                <div style="text-align: center">
                    <i class="icon iconfont icon-apphoutaiguanli" style="font-size: 100px; color: #E9232C"/>
                </div>
                    <h2 style="text-align: center">学猿后台管理系统</h2>
                    <el-form-item>
                        <el-input
                                v-model="loginForm.adminName"
                                prefix-icon="icon iconfont icon-icon"
                                placeholder="请输入用户名..."
                        />
                </el-form-item>
                <el-form-item>
                    <el-input
                            v-model="loginForm.adminPassword"
                            type="password"
                            placeholder="请输入密码..."
                    >
                        <span slot="prefix">
                            <i class="icon iconfont icon-mima"/>
                        </span>
                        <span slot="suffix">
                            <i class="icon iconfont icon-icon-test1"/>
                        </span>
                    </el-input>
                </el-form-item>
                <el-form-item style="text-align: center">
                    <el-button type="danger" style="width: 45%">登录</el-button>
                    <el-button type="danger" style="width: 45%">申请账户</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <img src="./../../assets/images/login_center_bg.png" alt="登录背景图片" class="login-bg-img"/>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                loginForm: {
                    adminName: '',
                    adminPassword: '',
                },
            };
        }
    }
</script>

<style scoped lang="less">
    .box-card {
        position: absolute;
        right: 0;
        left: 0;
        width: 360px;
        margin: 140px auto;
        border-top: 10px solid #E9232C;
    }
    .login-bg-img {
        background-color: #E9232C;
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        margin-top: 210px;
    }

</style>