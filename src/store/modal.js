const modal = {
    namespaced: true,

    state: {
        isOpening: false,
        path: "",
    },

    mutations: {
        setIsOpening(state, payload) {
            state.isOpening = payload;
        },
        setPath(state, payload) {
            state.path = payload;
        },
    },

    actions: {
        setModal({
            commit
        }, payload) {
            commit("setIsOpening", true);
            commit("setPath", payload);
        },
        async closeModal({
            commit
        }) {
            commit("setIsOpening", false);
            commit("setPath", null);
        },
    },
};

export default modal;