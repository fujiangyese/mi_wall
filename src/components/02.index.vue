<template>
	<div class="index">
		<!-- 左侧导航 -->
		<div class="nav">
			<!-- {{left}} -->
			<ul>
				<li v-for="(item, index) in item_list" :key="index">
					<span></span>
					<router-link :to="item.path">{{ item.name }}</router-link>
				</li>
			</ul>
		</div>
        <!-- 右侧主体区域 -->
		<div class="main">
			<router-view></router-view>
		</div>
        
	</div>
</template>

<script>
export default {
	data() {
		return {
			item_list: [
				{ name: "发现音乐", path: "/discovery", icon: "图标" },
				{ name: "推荐歌单", path: "/playlists" },
				{ name: "最新音乐", path: "/songs" },
				{ name: "最新MV", path: "/mvs" },
			],
		};
	},
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
a.router-link-active {
	color: white;
	background-color: orange;
}
li {
	text-align: center;
	margin: 10px;
	padding: 15px;
	font-size: 16px;
	font-weight: bold;
}
</style>
