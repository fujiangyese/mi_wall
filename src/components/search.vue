<template>
	<div class="search">
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="歌曲" name="first">
				<el-pagination
					background
					layout="prev, pager, next"
					:total="1000"
				>
				</el-pagination>
			</el-tab-pane>
			<el-tab-pane label="歌单" name="second">配置管理</el-tab-pane>
			<el-tab-pane label="MV" name="third">角色管理</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default{
	data(){
		return {
			activeName: "first",
		}
	},
	methods: {
		open() {
			this.$message({
				message: "这是一条警告信息",
				type: "warning",
			});
		},
		handleClick(tab, event) {
			console.log(tab, event);
		},
	},
}
</script>

<style>


</style>
