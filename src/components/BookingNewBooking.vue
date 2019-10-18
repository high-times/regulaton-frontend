<template>
    <v-card class="mx-auto elevation-3"
            flat
            max-width="800"
    >
        <!--        row one is for "add new cylinder"-->
        <v-container style="padding:0;" align="center">
            <v-row>
                <v-col>
                    <v-card-title  class="brown--text text--lighten-0">
                        <h2 align="center">Add Cylinder Details</h2>
                    </v-card-title>
                    <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                            width
                            class="ma-5">
                        <v-row align="center">
                            <v-col align="right">
                                <v-icon class="mx-5" @click="close" medium>mdi-close</v-icon>
                            </v-col>
                        </v-row>
                        <v-text-field
                                :counter="10"
                                :rules="nameRules"
                                box
                                label="Cylinder Number"
                                required
                                v-model="CylinderNumber"
                        ></v-text-field>
                        <v-text-field
                                v-model="EKCNumber"
                                :rules="EKC"
                                label="EKC Number"
                                required
                                box
                        ></v-text-field>
                        <v-text-field
                                v-model="MINumber"
                                :rules="items"
                                label="MI Number"
                                required
                                box
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
                                :disabled="!valid"
                                :color="this.$vuetify.theme.themes.light.inventory"
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
    import BookingNewBooking from '../components/BookingNewBooking.vue'
    import router from "../router"
    export default {
        name: "BookingNewBooking",
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Cylinder Number is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            EKC: '',
            EKC: [
                v => !!v || 'EKC is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            // checkbox: false,
        }),

        methods: {
            validate () {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
            close() {
                router.push({ name: 'Booking' });
            },
        },
    }
</script>

