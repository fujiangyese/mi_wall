<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<ul v-show="isShow">
			<li v-for="data in data_list" :key="data.id">
				<strong>这是传递过来的一条数据</strong>
				<div class="list">
					<p>{{ data.name }}</p>
					|
					<span>{{ data.hobby }}</span>
				</div>
			</li>
		</ul>
		<button @click="clearData">清空以上数据</button>
		<button @click="changeStatus">显示隐藏</button>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	data() {
		return {
			data_list: [
				{ id: 1, name: "Vue First", hobby: "Eat food" },
				{ id: 2, name: "Vue second", hobby: "Play football" },
				{ id: 3, name: "Jane", hobby: "Sing" },
			],
			isShow: true,
		};
	},
	props: {
		msg: String,
	},
	methods: { 
		clearData() {
			// 将data中的数据都清空
			this.msg = "";
			this.data_list = [];
		},
		changeStatus() {
			this.isShow = !this.isShow;
			console.log(this.isShow);
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
	color: cornflowerblue;
	background: white;
}
button:hover {
	color: white;
	background: cornflowerblue;
}
.list > p {
	display: inline;
}
</style>
