import Vue from "vue";
import VueRouter from "vue-router";
const About = () => import("./src/components/About.vue");
//懒加载
Vue.use(VueRouter);

const routes = [
	{
		path: "/about",
		name: "About",
		components: {
			default: About,
			left: () => import("./src/components/H1.vue"),
			right: () => import("./src/components/H2.vue"),
		},
    },
    {
		path: "/change",
		name: "Change",
		components: {
			default: About,
			left: () => import("./src/components/H2.vue"),
			right: () => import("./src/components/H1.vue"),
		},
	},
];

const router = new VueRouter({
	routes,
});

export default router;
