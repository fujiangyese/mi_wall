<template>
	<div>
		<ul>
			<li v-for="item in item_list" :key="item">
                <span></span>
				<router-link :to="item.path">{{item.name}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			item_list: [
				{ name: "发现音乐", path: "/discovery" ,icon:'图标'},
				{ name: "推荐歌单", path: "/tuijian" },
				{ name: "最新音乐", path: "/music" },
				{ name: "最新MV", path: "/mv" },
			],
		};
	},
};
</script>

<style scoped>
li {
	text-align: center;
	margin:10px;
	padding: 15px;
	font-size: 16px;
	font-weight: bold;
}
</style>
