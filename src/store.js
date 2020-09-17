import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
        myNum:0
    },
	mutations: {
        addNumber(state){
            state.myNum++
        },
        delNumber(state){
            state.myNum--
        },
    },
	actions: {
        //异步调用
        // asyncAdd(context){

        // }
    },
});
export default store
