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
                        <span>Add Contact</span>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <ContactsDatatable/>
                    <!--            <InventoryBookingHistory/>-->
                </v-col>
            </v-row>

        </v-container>
    </v-card>
</template>

<script>
    import ContactsDatatable from "../components/ContactsDatatable";

    export default {
        name: "Contacts",
        components: {ContactsDatatable},
        methods: {
            addContactClicked() {
            }
        }
    };
</script>

<style scoped></style>
