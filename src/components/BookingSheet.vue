<template>
    <v-card class="mx-auto"
            max-width="450"
            max-height="1500"
            outlined>
        <v-list>
            <v-list-item-group v-model="item">
                <v-list-item
                        :key="i"
                        class="pa-0"
                        v-for="(item, i) in detailData">
                    <v-list-item-content class="pa-0">
                        <v-col>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-col>
                        <v-col>
                            <v-list-item-title style="font-size:1.9em" class="orange--text" v-text="item.value"></v-list-item-title>
                        </v-col>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
    import BookingSheet from '../components/BookingSheet.vue'

    export default {
        name: "BookingSheet",
        data: () => ({
            detailData: {
                openBooking: {text: 'Open Booking', value: '23'},
                bookingClosed: {text: 'Booking Closed this month', value: '12'},
                paymentAwaiting: {text: 'Payment Awaiting this month', value: '11'},
                refillBooking: {text: 'Re-fill Bookings this month', value: '20'},
            }
        }),

    }
</script>

<style>

</style>