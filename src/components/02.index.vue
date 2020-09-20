<template>
	<div class="index">
		<!-- 左侧导航 -->
		<div class="nav">
            <!-- {{left}} -->
            <left></left>
        </div>
        <div class="main">
            <right></right>
        </div>
		<!-- 右侧容器 -->
	</div>
</template>

<script>
import left from './Left.vue'
import right from './Right.vue'
export default {
    components: {
        left,
        right
    }
};
</script>


<style>
.index {
    display: flex;
    /* display: flex; 开启弹性布局 */
    height: 830px;
}
.index .nav {
    width: 200px;
    background-color: #ededed;
}
.main {
    flex: 1;
}
</style>
