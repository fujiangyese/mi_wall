<template>
	<div>
		<!-- 轮播图banner -->
		<el-carousel :interval="4000" type="card" height="200px">
			<el-carousel-item v-for="(item, index) in bannerList" :key="index">
				<img class="lbt" :src="item.imageUrl" alt="" />
			</el-carousel-item>
		</el-carousel>
		<!-- 推荐歌单 -->
		<div class="recommend">
			<h3 class="title">推荐歌单</h3>
			<div
				class="items"
				v-for="(play_item, index) in playList"
				:key="index"
			>
				<div class="item">
					<div class="desc-wrap">
						<span class="desc">{{ play_item.copywriter }}</span>
					</div>
					<img :src="play_item.picUrl" alt="" />
					<span class="iconfont icon-play"></span>
				</div>
				<p class="name">{{ play_item.name }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	// 使用声明周期钩子 created
	// 回调函数，添加之后自动执行
	// 内部可以通过this访问到vue实例
	created() {
		// 调用轮播图接口
		axios({
			url: "http://localhost:3000/banner",
			method: "get",
		}).then((res) => {
			this.bannerList = res.data.banners;
		});
		// 调用推荐歌单接口
		axios({
			url: "http://localhost:3000/personalized",
			method: "get",
			params: { limit: 10 },
		}).then((res) => {
			this.playList = res.data.result;
			console.log(res.data.result);
		});
	},
	data() {
		return {
			bannerList: Array, //用于保存轮播图列表
			playList: Array, //用于保存推荐歌曲列表
		};
	},
};
</script>

<style>
.lbt {
	width: 550px;
	height: 230px;
}
.recommend {
	display: flex;
	float: left;
}
.item > * {
	width: 200px;
	/* height: 200px; */
	margin: 10px;
	overflow: hidden;
	/* cursor: pointer; */
}
.item > img {
	cursor: pointer;
}
.item > p {
	height: 80px;
}
</style>
