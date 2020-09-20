<template>
	<div>
		<top class="top"></top>
		<index class="index"></index>
		<div class="player"><audio src="" autoplay controls id="music"></audio></div>
	</div>
</template>

<script>
import top from "./components/01.top.vue";
import index from "./components/02.index.vue";
export default {
	components: {
		top,
		index,
	},
	data() {
		return {
			// msg:'来自主视图的数据'
		};
	},
	methods: {},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
.top {
	/* 开启弹性布局 */
	display: flex;
	align-items: center;
	color: #f9f9f9;
}
input {
	height: 50px;
	width: 350px;
	/* border: none; */
}
.player {
  width: 100%;
}
</style>
