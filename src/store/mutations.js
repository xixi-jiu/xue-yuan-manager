import {
    TOGGLE_ASIDE_BAR,

} from './mutations-type';

export default {
    // 1.控制主面板左侧的展开与收缩
    [TOGGLE_ASIDE_BAR](state) {
        state.isCollapsed = !state.isCollapsed;
    },

}