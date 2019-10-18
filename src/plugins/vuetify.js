import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: "#cccccc",
                secondary: "#555555",
                accent: "#3a6d8b",
                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107",
                home: "#656565",
                inventory: "#8C594D",
                bookings: "#BF9775",
                contacts: "#7EADBF",
                reports: "#3A6D8C"
            }
        }
    },
    icons: {
        iconfont: "mdi"
    }
});
