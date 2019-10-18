import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Inventory from "./views/Inventory.vue";
import Bookings from "./views/Bookings.vue";
import Reports from "./views/Reports";
import Contacts from "./views/Contacts";
import InventoryBookingHistory from "./components/InventoryBookingHistory";
import InventoryAddCylinder from "./components/InventoryAddCylinder";
import ContactAdd from "./components/ContactAdd";
import BookingNewBooking from "./components/BookingNewBooking";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/bookings/BookingNewBooking",
            name: "BookingNewBooking",
            component: BookingNewBooking
        },
        {
        path: "/inventory/inventoryDetail",
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
        path: "/contact/add",
        name: "ContactAdd",
        component: ContactAdd
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
