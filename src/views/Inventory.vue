<template>
    <v-card flat
            class="mx-auto"
            max-width="1200">
<!--        row one is for "add new cylinder"-->
<v-container style="padding:0;">
    <v-row>
        <v-col>
            <v-btn
                    :color="this.$vuetify.theme.themes.light.inventory"
                    class="white--text float-right"
                    rounded>
                <span>Add Cylinder</span>
            </v-btn>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <InventoryDatatable/>
<!--            <InventoryBookingHistory/>-->
        </v-col>
    </v-row>

</v-container>
</v-card>
</template>

<script>
     import InventoryDatatable from '../components/InventoryDatatable.vue'
        // import InventorySheet from '../components/InventorySheet'
        // import InventoryBookingHistory from "../components/InventoryBookingHistory.vue"
    export default {
          components: ({InventoryDatatable})
    };
</script>
<style scoped>

</style>

