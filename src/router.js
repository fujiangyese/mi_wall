import Vue from "vue";
import VueRouter from "vue-router";
const About = () => import("./components/About.vue");
//懒加载
Vue.use(VueRouter);

const routes = [
	{
		path: "/about",
		name: "About",
		component:About
    },
    
];

const router = new VueRouter({
	routes,
});

export default router;
