<template>
    <v-card>
        <v-card-text>
            <!--        row one is for "add new cylinder"-->
            <v-container align="center" style="padding:0;">
                <v-row>
                    <v-col>
                        <v-toolbar class="text-center" color='inventory--text' flat>
                            <v-toolbar-title style="width:100%;">
                                <h2 :style="`width:100%;`"
                                >Add
                                    Cylinder Details</h2></v-toolbar-title>
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
                                    :rules="nameRules"
                                    color="inventory"
                                    label="Serial No."
                                    prepend-icon="mdi-database-lock"
                                    required
                                    v-model="newItem.USER_DEFINED_ID"
                            ></v-text-field>

                            <v-select :items="cylinderSizeList"
                                      color="inventory"
                                      label="Size"
                                      prepend-icon="mdi-resize"
                                      v-model="newItem.SIZE"
                            ></v-select>
                            <v-select :items="cylinderGasTypeList"
                                      color="inventory"
                                      label="Gas type"
                                      prepend-icon="mdi-gas-cylinder"
                                      v-model="newItem.SUB_TYPE"
                            ></v-select>


                            <v-autocomplete
                                    :items="contactsListResponse"
                                    :loading="isContactsLoading"
                                    :search-input.sync="contactNameToSearch"
                                    color="inventory"
                                    hide-no-data
                                    item-text="NAME"
                                    item-value="CONTACT_ID"
                                    label="Owner"
                                    prepend-icon="mdi-account"
                                    v-model="newItem.OWNER"
                            ></v-autocomplete>


                            <v-select :items="cylinderPurposeTypeList"
                                      color="inventory"
                                      label="Purpose"
                                      prepend-icon="mdi-shopping-outline"
                                      v-model="newItem.PURPOSE"
                            ></v-select>

                            <v-select :items="cylinderStatusTypeList"
                                      color="inventory"
                                      label="Status"
                                      prepend-icon="mdi-state-machine"
                                      v-model="newItem.STATUS"
                            ></v-select>

                            <v-menu :close-on-content-click="false"
                                    :nudge-right="40"
                                    color="inventory"
                                    min-width="290px"
                                    offset-y
                                    transition="scale-transition"
                                    v-model="showOnboardingDateMenu"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field color="inventory"
                                                  label="Onboarding date"
                                                  prepend-icon="mdi-calendar"
                                                  readonly
                                                  v-model="formattedOnboardingDate"
                                                  v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker @input="showOnboardingDateMenu = false"
                                               color="inventory"
                                               v-model="newItem.ONBOARDING_DATE"></v-date-picker>
                            </v-menu>


                            <v-btn
                                    :disabled="!valid"
                                    @click="addItem"
                                    class="white--text float-right"
                                    color="inventory"
                                    rounded
                            >
                                SAVE
                            </v-btn>
                        </v-form>
                    </v-col>
                </v-row>
            </v-container>
            <v-overlay
                    :value="overlay"
                    absolute
            >
                <v-container fluid>
                    <v-row align="center"
                           justify="center"
                    >
                        <v-col class="text-center" cols="12">
                            <v-progress-circular color="inventory"
                                                 indeterminate
                                                 size="50"
                            ></v-progress-circular>
                            <div class="headline ma-4">Adding cylinder to inventory</div>


                        </v-col>
                    </v-row>
                </v-container>
            </v-overlay>

            <v-snackbar
                    color="inventory"
                    v-model="snackbar"
            >
                {{ snackbarText }}
                <v-btn

                        @click="snackbar = false"
                        icon text
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-snackbar>
        </v-card-text>
    </v-card>
</template>

<script>


    import axios from "axios";
    import moment from 'moment';

    export default {
        name: "InventoryAddCylinder",
        mounted() {
            // this.fetchContactsList();
        },
        computed: {
            contactsList() {
                return this.contactsListResponse;
            },
            formattedOnboardingDate() {
                return this.newItem.ONBOARDING_DATE ? moment(this.newItem.ONBOARDING_DATE).format('DD MMM YYYY') : '';
            }
        },
        data: () => ({
            valid: true,
            name: '',
            newItem: {
                USER_DEFINED_ID: '',
                SIZE: '',
                TYPE: 'Cylinder',
                SUB_TYPE: '',
                OWNER: '',
                PURPOSE: 'Retail',
                ONBOARDING_DATE: '',
                STATUS: 'Empty'
            },
            nameRules: [
                v => !!v || 'Serial Number is required'
            ],
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            cylinderSizeList: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
            cylinderGasTypeList: ['N2', 'O2', 'Ar', 'CO2'],
            contactsListResponse: [],
            contactNameToSearch: "",
            isContactsLoading: false,
            cylinderPurposeTypeList: ["Refill", "Retail"],
            cylinderStatusTypeList: ["Available", "Empty"],
            showOnboardingDateMenu: false,
            snackbar: false,
            snackbarText: "",
            overlay: false,
        }),
        watch: {
            contactNameToSearch: function (newValue, oldValue) {
                if (newValue && newValue.length < 2) return;
                let __self = this;

                if (__self.isContactsLoading) return;

                __self.isContactsLoading = true;

                axios
                    .post(`http://localhost:3002/api/contact?action=findAllByName&name=${__self.contactNameToSearch}`, {})
                    .then(response => {
                        __self.contactsListResponse = response.data.rows;
                    })
                    .catch(error => {
                        // handle error
                        __self.contactsListResponse = [];
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                        __self.isContactsLoading = false;
                    });

            }
        },
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
                this.$emit('close-dialog');
            }
            ,
            addItem() {
                let __self = this;
                if (this.$refs.form.validate()) {
                    console.log(this.newItem);
                    __self.overlay = true;
                    axios
                        .post(`http://localhost:3002/api/cylinder?action=create`, this.newItem)
                        .then(response => {
                            // handle success
                            __self.overlay = false;
                            __self.snackbarText = "Cylinder added successfully";
                            console.log(response);
                        })
                        .catch(error => {
                            // handle error
                            __self.overlay = false;
                            __self.snackbarText = "There was error adding cylinder!";
                            console.log(error);
                        })
                        .finally(function () {
                            __self.snackbar = true;
                            __self.$refs.form.reset();
                            __self.close();
                            // always executed
                        });
                } else {
                    console.log("Not valid!");
                }


            }
        }
        ,
    }
</script>

