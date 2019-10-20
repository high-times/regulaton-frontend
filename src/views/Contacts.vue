<template>
    <v-card class="mx-auto"
            flat
            max-width="1200">
        <!--        row one is for "add new cylinder"-->
        <v-container style="padding:0;">
            <v-row>

                <v-col>
                    <v-btn
                            :color="this.$vuetify.theme.themes.light.contacts"
                            @click="addContactClicked"
                            class="white--text float-right" rounded>
                        <span class="text-none font-weight-regular subtitle-1">Add Contact</span>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <ContactsDatatable table-height="270"/>
                    <!--            <InventoryBookingHistory/>-->
                </v-col>
            </v-row>

        </v-container>
        <v-dialog
                max-width="500px"
                persistent
                style="overflow-x: hidden;"
                v-model="showAddContactDialog"
        >
            <ContactAdd ref="contactAddRef" v-on:close-dialog="closeDialog()"/>
        </v-dialog>
    </v-card>
</template>

<script>
    import ContactsDatatable from "../components/ContactsDatatable";
    import ContactAdd from "../components/ContactAdd";
    import {CommunicationBus} from "../main";
    import router from "../router"

    export default {
        name: "Contacts",
        components: {ContactsDatatable, ContactAdd},
        methods: {
            addContactClicked() {
                //router.push({name: 'ContactAdd'});
                this.showAddContactDialog = true;
            },
            closeDialog() {
                this.showAddContactDialog = false;
            }
        },
        data: function () {
            return {
                showAddContactDialog: false
            }
        },
        watch: {

            showAddContactDialog: (isShowing, wasShowing) => {
                if (isShowing === true) {
                    CommunicationBus.$emit('contacts-add-dialog-opened', {
                        isShowing: isShowing
                    });
                }
            }
        }
    };
</script>

<style scoped></style>
