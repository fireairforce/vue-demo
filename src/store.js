import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// data,computed,props
const state = {
  count1: 1,
};

const mutations = {
  increment(state) {
    state.count1++;
  },
  decrement(state) {
    state.count1--;
  },
};
// 接收组件的用户行为,然后去修改一波state
const actions = {
  increment: ({ commit }) => {
    commit("increment");
  },
  decrement: ({ commit }) => {
    commit("decrement");
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
