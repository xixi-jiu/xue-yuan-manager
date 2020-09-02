<template>
    <div class="app-container">
        <el-col :span="12">
            <img :src="img_404" alt="404图片" class="img-style">
        </el-col>
        <el-col :span="12">
            <div style="margin-left: 100px; margin-top: 60px">
                <h1>oh! no!!</h1>
                <h2>很抱歉, 西西把页面走丢了!</h2>
                <div>请检查输入的网址是否正确, 请点击按钮返回主页!</div>
                <el-button
                    type="danger"
                    style="margin-top: 20px"
                    round
                    @click="goMainPage"
                >
                    返回首页
                </el-button>
            </div>
        </el-col>
    </div>
</template>

<script>
    import img_404 from '@/assets/images/gif_404.gif';
    export default {
        name: "not-found",
        data() {
            return {
                img_404,
            }
        },
        methods: {
            goMainPage() {
                this.$router.replace({path: '/'});
            },
        }
    }
</script>

<style scoped lang="less">
    .app-container {
        width: 80%;
        margin: 120px auto;
        .img-style {
            width: auto;
            height: auto;
            max-height: 100%;
            max-width: 100%;
        }
    }

</style>