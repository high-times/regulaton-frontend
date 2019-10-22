<template>
    <v-card class="mt-10 mx-auto elevation-3"
            flat
            max-width="800"
    >
        <!--        row one is for "add new cylinder"-->
        <v-container align="center" style="padding:0;">
            <v-row>
                <v-col>
                    <v-toolbar class="text-center" flat>
                        <v-toolbar-title style="width:100%;">
                            <h2 :style="`width:100%; color: ${this.$vuetify.theme.themes.light.bookings};`"
                            >Add Booking Details</h2></v-toolbar-title>
                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <v-icon @click="close" class="mx-5" medium>mdi-close</v-icon>
                        </v-btn>

                    </v-toolbar>
                    <v-form
                            class="ma-5"
                            lazy-validation
                            ref="form"
                            v-model="valid"
                            width>

                        <v-text-field
                                :counter="10"
                                :rules="nameRules"
                                box
                                label="Customer Name"
                                required
                                v-model="Customername"
                        ></v-text-field>
                        <v-text-field
                                :rules="Cylinderno"
                                box
                                label="Cylinder Number"
                                required
                                v-model="Cylindernumber"
                        ></v-text-field>
                        <v-select
                                v-model="select"
                                :items="items"
                                :rules="[v => !!v || 'Item is required']"
                                label="Type of Booking"
                                required
                        ></v-select>
                        <v-select
                                v-model="select"
                                :items="user"
                                :rules="[v => !!v || 'Services by is required']"
                                label="Serviced By - User"
                                required
                        ></v-select>
                        <v-text-field
                                :rules="Comments"
                                box
                                label="Comments or Remarks for booking"
                                required
                                v-model="Comments"
                        ></v-text-field>
                        <v-menu>
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                        :value="due"
                                        label="Due Date"
                                        prepend-icon="mdi-account"
                                        v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="due"></v-date-picker>
                        </v-menu>
                        <v-btn
                                :color="this.$vuetify.theme.themes.light.bookings"
                                :disabled="!valid"
                                @click="Save"
                                class="white--text float-right, mr-4, ma-5"
                                rounded
                        >
                            SAVE
                        </v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>

    import router from "../router"

    export default {
        name: "BookingNewBooking",
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Customer Name is required',
                v => (v && v.length <= 20) || 'Name must be less than 20 characters',
            ],
            Cylinderno: [
                v => !!v || 'Cylindernumber is required',
                v => /.+@.+\..+/.test(v) || 'Cylindernumber must be valid',
            ],
            select: null,
            items: [
                'New Booking',
                'Customer',
                'Rent',
                'Dealer',
            ],
            select: null,
            user: [
                'Bhushan',
                'Piyush',
                'Munot'
            ],
            name: '',
            comments: [
                v => (v && v.length <= 50) || 'Comments must be less than 50 characters',
            ],
            // checkbox: false,

        }),

        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
            }
            ,
            reset() {
                this.$refs.form.reset()
            }
            ,
            resetValidation() {
                this.$refs.form.resetValidation()
            }
            ,
            close() {
                router.push({name: 'bookings'});
            }
            ,
        }
        ,
    }
</script>

