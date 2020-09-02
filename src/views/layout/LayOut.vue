<template>
    <el-container class="app-wrapper">
        <!--头部区域-->
        <NavBar />
        <el-container class="main-wrapper">
            <LeftAside />
            <AppMain />
        </el-container>
    </el-container>

</template>

<script>
    import NavBar from './components/nav-bar.vue';
    import LeftAside from './components/left-aside.vue';
    import AppMain from './components/app-main.vue';
    export default {
        name: "layout",
        components: {
            NavBar,
            LeftAside,
            AppMain,
        },
    }
</script>

<style scoped lang="less">
    .app-wrapper {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        .main-wrapper {
            width: 100%;
            height: calc(100vh - 10px);
        }
    }
</style>