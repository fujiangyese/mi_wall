import Vue from "vue";
import VueRouter from "vue-router";
// const About = () => import("./components/About.vue");
//懒加载
Vue.use(VueRouter);

const routes = [
	// {
	// 	path: "/about",
	// 	name: "About",
	// 	component:About
	// },
	{ path: "/", component: () => import("./components/discovery.vue") },
	{
		path: "/discovery",
		name: "discovery",
		component: () => import("./components/discovery.vue"),
	},
	{
		path: "/playlists",
		name: "playlists",
		component: () => import("./components/playlists.vue"),
	},
	{
		path: "/songs",
		name: "songs",
		component: () => import("./components/songs.vue"),
	},
	{
		path: "/mvs",
		name: "mvs",
		component: () => import("./components/mvs.vue"),
	},
	{
		path: "/search",
		name: "search",
		component: () => import("./components/search.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
