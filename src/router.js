import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Inventory from "./views/Inventory.vue";
import Bookings from "./views/Bookings.vue";
import Reports from "./views/Reports";
import Contacts from "./views/Contacts";
import InventoryBookingHistory from "./components/InventoryBookingHistory";
import InventoryAddCylinder from "./components/InventoryAddCylinder";
Vue.use(Router);

export default new Router({
    routes: [
        {
        path: "/inventoryDetail",
        name: "inventoryDetail",
        component: InventoryBookingHistory,
        props:true
        },
        {
            path: "/inventory/InventoryAddCylinder",
            name: "InventoryAddCylinder",
            component: InventoryAddCylinder
        },
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/inventory",
            name: "inventory",
            component: Inventory
        },
        {
            path: "/bookings",
            name: "bookings",
            component: Bookings
        },
        {
            path: "/contacts",
            name: "contacts",
            component: Contacts
        },
        {
            path: "/reports",
            name: "reports",
            component: Reports
        }
    ]
});
