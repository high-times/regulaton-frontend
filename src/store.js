import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userLoggedIn: true,
        title: "Regulaton",
        loggedInUserDetails: {
            "FIRST_NAME": "Saurabh",
            "LAST_NAME": "Bhansali",
            "EMAIL": "bhansali.saurabh20@gmail.com"
        }
    },
    mutations: {
        loginUser(state) {
            state.userLoggedIn = true;
        },
        logoutUser(state) {
            state.userLoggedIn = false;
        }
    },
    actions: {},
    getters: {
        userLoggedIn: state => state.userLoggedIn,
        title: state => state.title
    }
});
