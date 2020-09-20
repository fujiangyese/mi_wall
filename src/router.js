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
    {
		path:'/discovery',
		name:'discovery',
		component:()=> import('./components/discovery.vue')
	},
	{
		path:'/tuijian',
		name:'tuijian',
		component:()=> import('./components/tuijian.vue')
	},
	{
		path:'/music',
		name:'music',
		component:()=> import('./components/music.vue')
	},
	{
		path:'/mv',
		name:'mv',
		component:()=> import('./components/mv.vue')
	}
];

const router = new VueRouter({
	routes,
});

export default router;
