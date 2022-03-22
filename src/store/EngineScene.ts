let EngineScene = {
    // 你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块
    // https://vuex.vuejs.org/zh/guide/modules.html#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4
    namespaced: true,
    state: {
        AllSceneUp: "CesiumGloble", //CesiumGloble BabylonDesign CBScence
        CesiumGlobleObj: {
            canvas: null,
            viewer: null,
            firstIndex: true,
        },
        BabylonDesignObj: {
            canvas: null,
            engine: null,
            scene: null,
        },
        CBScenceObj: {
            canvasCesium: null,
            viewer: null,
            canvasBabylon: null,
            engine: null,
            sceneBabylon: null,
        },
    },
    mutations: {
        setAllSceneUp(state: any, AllSceneUp: String) {
            debugger;
            state.AllSceneUp = AllSceneUp;
            state.CesiumGlobleObj.firstIndex = AllSceneUp == "CesiumGloble";
            state.BabylonDesignObj.firstIndex = AllSceneUp == "BabylonDesign";
            state.CBScenceObj.firstIndex = AllSceneUp == "CBScence";
        },
        setCesiumGlobleObj(state: any, CesiumGlobleObj: {
            canvas: null,
            viewer: null,
            firstIndex: true,
        }) {
            debugger
            CesiumGlobleObj.firstIndex = true;
            state.CesiumGlobleObj = CesiumGlobleObj;
        },
        setBabylonDesignObj(state: any, BabylonDesignObj: any) {
            BabylonDesignObj.firstIndex = false;
            state.BabylonDesignObj = BabylonDesignObj;
        },
        setCBScenceObj(state: any, CBScenceObj: any) {
            CBScenceObj.firstIndex = false;
            state.CBScenceObj = CBScenceObj;
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
