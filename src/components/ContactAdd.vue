<template>
    <v-card

    >
        <!--        row one is for "add new cylinder"-->
        <v-card-text>
            <v-container align="center" style="padding:0; margin: 0;">
                <v-row>
                    <v-col>
                        <v-toolbar class="text-center" flat>
                            <v-toolbar-title style="width:100%;">
                                <h2 :style="`width:100%; color: ${this.$vuetify.theme.themes.light.contacts};`"
                                >Add
                                    Contact</h2></v-toolbar-title>
                            <v-spacer></v-spacer>

                            <v-btn icon>
                                <v-icon @click="goBack()" class="px-5" medium>mdi-close</v-icon>
                            </v-btn>

                        </v-toolbar>
                        <v-form
                                class="pa-5"
                                lazy-validation
                                ref="form"
                                v-model="valid"
                                width>
                            <v-text-field :color="`${this.$vuetify.theme.themes.light.contacts}`"
                                          label="Customer/Company Name"
                                          prepend-icon="mdi-factory" v-model="newContact.name"></v-text-field>
                            <v-text-field :color="`${this.$vuetify.theme.themes.light.contacts}`"
                                          label="Reference name"
                                          prepend-icon="mdi-account" v-model="newContact.refName"></v-text-field>
                            <v-textarea :color="`${this.$vuetify.theme.themes.light.contacts}`"
                                        label="Address" prepend-icon="mdi-mailbox"
                                        rows="2" v-model="newContact.address"></v-textarea>
                            <v-text-field :color="`${this.$vuetify.theme.themes.light.contacts}`"
                                          :rules="[validationRules.phone]"
                                          label="Phone" prepend-icon="mdi-phone"
                                          type="tel" v-model="newContact.phoneNo"></v-text-field>
                            <v-text-field :color="`${this.$vuetify.theme.themes.light.contacts}`"
                                          :rules="[validationRules.email]"
                                          label="Email" prepend-icon="mdi-mail"
                                          type="email" v-model="newContact.email"></v-text-field>
                            <v-select :color="`${this.$vuetify.theme.themes.light.contacts}`"
                                      :items="serviceTypesList" label="Service Type"
                                      prepend-icon="mdi-account-switch" v-model="newContact.serviceType"></v-select>
                            <v-text-field :color="`${this.$vuetify.theme.themes.light.contacts}`"
                                          label="Agent name"
                                          prepend-icon="mdi-account" v-model="newContact.agentName"></v-text-field>

                            <v-btn :color="this.$vuetify.theme.themes.light.contacts"
                                   :disabled="!valid"
                                   @click="addContact"
                                   class="white--text float-right mr-4"
                                   rounded
                            >
                                Add
                            </v-btn>
                        </v-form>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
        <v-overlay
                :value="overlay"
                absolute
        >
            <v-container fluid>
                <v-row align="center"
                       justify="center"
                >
                    <v-col class="text-center" cols="12">
                        <v-progress-circular :color="this.$vuetify.theme.themes.light.contacts"
                                             indeterminate
                                             size="50"
                        ></v-progress-circular>
                        <div class="headline ma-4">Saving contact</div>


                    </v-col>
                </v-row>
            </v-container>
        </v-overlay>

        <v-snackbar
                :color="`${this.$vuetify.theme.themes.light.contacts}`"
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
    </v-card>
</template>

<script>

    import {CommunicationBus} from "../main";
    import axios from "axios";

    export default {
        name: "ContactAddCylinder",
        mounted() {
            CommunicationBus.$on('contacts-add-dialog-opened', this.onLoadDialog);
        },
        data: () => ({
            snackbar: false,
            snackbarText: "",
            overlay: false,
            valid: true,
            validationRules: {
                required: value => !!value || 'Required.',
                phone: value => {
                    const pattern = /^\d{5,12}$/;
                    return pattern.test(value) || 'Invalid phone.'
                },
                email: value => {
                    const pattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gmi;
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            },
            newContact: {
                name: '',
                refName: '',
                address: '',
                phoneNo: '',
                email: '',
                serviceType: '',
                agentName: '',
                init: () => {
                    for (let k in this) {
                        if (k !== 'init') {
                            if (this.hasOwnProperty(k))
                                this[k] = '';
                        }
                    }
                }
            },
            titleStyle: {
                color: () => this.$vuetify.theme.themes.light.inventory
            },
            serviceTypesList: ['Retailer', 'Dealer', 'Refiller']
        }),

        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
            goBack() {
                this.$emit('close-dialog');
            },
            onLoadDialog() {
                console.log(this.$refs);
                this.$refs.form.reset();
            },
            addContact() {
                let __self = this;
                let contactDataToSend = {
                    "NAME": this.newContact.name,
                    "REF_NAME": this.newContact.refName,
                    "ADDRESS": this.newContact.address,
                    "PHONE_NO": this.newContact.phoneNo,
                    "EMAIL": this.newContact.email,
                    "SERVICE_TYPE": this.newContact.serviceType,
                    "AGENT_NAME": this.newContact.agentName
                };
                console.log(contactDataToSend);
                this.overlay = true;

                axios
                    .post(`http://localhost:3002/api/contact?action=create`, contactDataToSend)
                    .then(response => {
                        // handle success
                        __self.overlay = false;
                        __self.snackbarText = "Contact added successfully";
                        console.log(response);
                    })
                    .catch(error => {
                        // handle error
                        __self.overlay = false;
                        __self.snackbarText = "There was error saving your contact!";
                        console.log(error);
                    })
                    .finally(function () {
                        __self.snackbar = true;
                        __self.$refs.form.reset();
                        __self.goBack();
                        // always executed
                    });
            }
        }
        ,
    }
</script>

