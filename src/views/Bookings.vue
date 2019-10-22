<template>
    <v-card class="mx-auto"
            flat>
        <!--        row one is for "new booking"-->
        <v-container style="padding:0;">
            <v-row>
                <v-col>
                    <v-btn
                            :color="this.$vuetify.theme.themes.light.bookings"
                            class="white--text float-right" rounded
                            @click="newbookingclicked">
                        <span class="text-none font-weight-regular subtitle-1">New Booking</span>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col>
                    <BookingDatatable tableHeight="270"></BookingDatatable>
                </v-col>
                <v-col>
                    <BookingSheet tableHeight="270"></BookingSheet>
                </v-col>
            </v-row>

        </v-container>
    </v-card>
</template>

<script>
    import router from "../router";
    import BookingNewBooking from '../components/BookingNewBooking.vue';
    import BookingDatatable from '../components/BookingDatatable.vue';
    import BookingSheet from '../components/BookingSheet.vue';

    export default {
        name: "Bookings",
        components: ({BookingDatatable,BookingNewBooking,BookingSheet}),
        methods: {
            newbookingclicked() {
                router.push({name: 'BookingNewBooking'});
            }
        }
    };
</script>

<style scoped></style>
