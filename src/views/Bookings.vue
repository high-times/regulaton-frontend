<template>
<v-card class="mx-auto"
        max-width="1500">
    <!--        row one is for "add new cylinder"-->
    <v-container style="padding:0;">
        <v-row>
            <v-col>
                <v-btn
                        :color="this.$vuetify.theme.themes.light.bookings"
                        @click="newbookingClicked"
                        class="white--text float-right" rounded>
                    <span>New Booking</span>
                </v-btn>
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col>
                <BookingDatatable/>
                <!--            <InventoryBookingHistory/>-->
            </v-col>
            <v-col>
                <BookingSheet/>
            </v-col>
        </v-row>

    </v-container>
</v-card>
</template>
<script>
    import BookingDatatable from '../components/BookingDatatable.vue'
    import BookingSheet from '../components/BookingSheet.vue'
    import BookingNewBooking from "../components/BookingNewBooking";
    import router from "../router"

    export default {
        components: ({BookingDatatable , BookingSheet, BookingNewBooking}),
        name: "Bookings",
        methods: {
            newbookingClicked() {
                router.push({ name: 'BookingNewBooking' });
            }
        }
    };
</script>

<style scoped></style>
