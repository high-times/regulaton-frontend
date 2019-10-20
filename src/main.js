import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import VueApexCharts from 'vue-apexcharts'

export const CommunicationBus = new Vue();


Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,

    render: function (h) {
        return h(App);
    }
}).$mount("#app");
