import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		qm: {
			state: {
				myNum: 0,
			},
			mutations: {
				addNumber(state, params) {
					state.myNum = state.myNum + params.num;
				},
				delNumber(state) {
					state.myNum--;
				},
			},
			actions: {
				//异步调用
				asyncAdd(context, params) {
					setTimeout(() => {
						context.commit("addNumber", params);
					}, 1000);
				},
			},
		},
	},
});
export default store;
