const state = {
  count: 10,
};

const mutations = {
  add(state,payload) {
    window.console.log(payload);
    state.count+=payload;
  },
  reduce(state) {
    state.count--;
  },
};

const actions = {
  add: ({ commit }, payload) => {
    commit("add", payload);
  },
  reduce: ({ commit }) => {
    commit("reduce");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
