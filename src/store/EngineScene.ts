let EngineScene = {
    // 你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块
    // https://vuex.vuejs.org/zh/guide/modules.html#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4
    namespaced: true,
    state: {
        AllSceneUp: 'CesiumGloble',//CesiumGloble BabylonDesign CBScence
        CesiumGlobleCanvas:null,
    },
    mutations: {
        setAllSceneUp(state: any,AllSceneUp: String) {
            debugger
            state.AllSceneUp = AllSceneUp;
        },
        setCesiumGlobleCanvas(state: any,CesiumGlobleCanvas: any) {
            debugger
            state.CesiumGlobleCanvas = CesiumGlobleCanvas;
        },
    },
    getters: {
        // countGetter: (state: any) => "EngineScene:" + state.count,
    },
    actions: {
        // increment(context: any) {
        //     context.commit("increment");
        // },
    },
};

export { EngineScene };
