import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userLoggedIn: false
  },
  mutations: {
    loginUser(state){
      state.userLoggedIn = true;
    },
    logoutUser(state){
      state.userLoggedIn = false;
    }
  },
  actions: {},
  getters:{
    userLoggedIn: state => state.userLoggedIn
  }
});
