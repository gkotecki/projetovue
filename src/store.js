import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUserId: 13618055,
  },
  mutations: {
    setStateObj(obj) {
      this.state.currentUser = obj;
    },
  },
  actions: {},
});
