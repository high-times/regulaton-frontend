<template>
    <v-card class="mx-auto"
            flat
            max-width="1200">
        <!--        row one is for "add new cylinder"-->
        <v-container style="padding:0;">
            <v-row>

                <v-col>
                    <v-btn
                            :color="this.$vuetify.theme.themes.light.inventory"
                            @click="addCylinderClicked"
                            class="white--text float-right" rounded>
                        <span class="text-none font-weight-regular subtitle-1">Add Cylinder</span>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <InventoryDatatable tableHeight="270"></InventoryDatatable>
                    <!--            <InventoryBookingHistory/>-->
                </v-col>
            </v-row>

        </v-container>
        <v-dialog
                max-width="500px"
                persistent
                style="overflow-x: hidden;"
                v-model="showAddItemDialog"
        >
            <InventoryAddCylinder ref="itemAddRef" v-on:close-dialog="closeDialog()"></InventoryAddCylinder>
        </v-dialog>
    </v-card>
</template>

<script>
    import InventoryDatatable from '../components/InventoryDatatable.vue'
    import InventoryAddCylinder from '../components/InventoryAddCylinder.vue'
    import router from "../router"
    import {CommunicationBus} from "../main";
    // import InventorySheet from '../components/InventorySheet'
    // import InventoryBookingHistory from "../components/InventoryBookingHistory.vue"
    export default {
        components: ({InventoryDatatable, InventoryAddCylinder}),

        methods: {
            addCylinderClicked() {
                this.showAddItemDialog = true;
            },
            closeDialog() {
                this.showAddItemDialog = false;
            }
        },
        data: function () {
            return {
                showAddItemDialog: false
            }
        },
        watch: {
            showAddItemDialog: (isShowing, wasShowing) => {
                if (isShowing === true) {
                    CommunicationBus.$emit('item-add-dialog-opened', {
                        isShowing: isShowing
                    });
                }
            }
        }
    };
</script>
<style scoped>
</style>

