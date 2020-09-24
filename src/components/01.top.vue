<template>
	<div>
		<img src="../assets/01.png" alt="" />
		<input
			type="text"
			v-model="inputValue"
			placeholder="请输入要查询的歌曲名称"
			@keyup.enter="toSearch"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			inputValue: "",
		};
	},
	methods: {
		toSearch() {
			if (this.inputValue == "") {
				// alert('输入内容为空，请重新输入')
				this.$message({
					message: "这是一条警告信息",
					type: "warning",
				});
				return;
			}
			this.$router.push({
				path: "/search",
				query: { keyword: this.inputValue },
			});
		},
	},
};
</script>

<style></style>
