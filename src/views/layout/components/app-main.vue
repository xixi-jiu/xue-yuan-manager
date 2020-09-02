<template>
    <el-main>
        <!--侧边控制-->
        <span class="icon iconfont icon-hamburger" :class="{'is-collapse': isCollapsed}" @click="toggleAsideBar"></span>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </el-main>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    export default {
        name: "app-main",
        computed: {
            ...mapState(['isCollapsed']),
        },
        methods: {
            ...mapActions(['toggleAsideBar']),
        }
    }
</script>

<style scoped lang="less">
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter,
    .fade-leave {
        opacity: 0;
    }
    .el-main {
        padding: 60px;
        position: relative;
    }
    .icon-hamburger {
        font-size: 25px;
        position: absolute;
        top: 20px;
        left: 20px;
        cursor: pointer;

        transition: 0.5s;
        transform-origin: 50% 50%;
    }
    .is-collapse {
        transform: rotate(-90deg);
    }
</style>