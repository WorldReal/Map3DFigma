import { createStore } from "vuex";
import { EngineScene } from "./EngineScene";
import { moduleA } from "./modulesTest/moduleA";

const store = createStore({
    state() {
        return {
            count: 0,
        };
    },
    getters: {
        countGetter: (state: { count: number; }) => {
            return "Getter处理:" + state.count;
        },
    },
    mutations: {
        increment(state: { count: number; }) {
            state.count++;
        },
    },
    // 模块化
    modules: {
        ma: moduleA,
        EngineScene: EngineScene
    },
});

store.commit("increment");

console.log(store.state.count); // -> 1

export default store;
