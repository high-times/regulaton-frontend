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
                        <span>Add Cylinder</span>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <InventoryDatatable tableHeight="420"></InventoryDatatable>
                    <!--            <InventoryBookingHistory/>-->
                </v-col>
            </v-row>

        </v-container>
    </v-card>
</template>

<script>
    import InventoryDatatable from '../components/InventoryDatatable.vue'
    import InventoryAddCylinder from '../components/InventoryAddCylinder.vue'
    import router from "../router"
    // import InventorySheet from '../components/InventorySheet'
    // import InventoryBookingHistory from "../components/InventoryBookingHistory.vue"
    export default {
        components: ({InventoryDatatable, InventoryAddCylinder}),

        methods: {
            addCylinderClicked() {
                router.push({name: 'InventoryAddCylinder'});
            }
        },
        data: function () {
            return {}
        }
    };
</script>
<style scoped>
</style>

