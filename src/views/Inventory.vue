<template>
    <v-card
            flat
            class="mx-auto"
            max-width = "900">
       <!--        row one is for "add new cylinder"-->
    <v-container style="padding:0;" >
        <v-row>
            <v-col>
            <v-btn
                    absolute
                    right
                    rounded
                    :color="this.$vuetify.theme.themes.light.inventory"
                    class="white--text">
                <span> Add Cylinder</span>
            </v-btn>
            </v-col>
        </v-row>
        <v-row class="ma-10">
            <v-col>
                <Datatable/>
            </v-col>
         </v-row>

   </v-container>
    </v-card>
</template>

<script>
    import Datatable from '../components/Datatable'
    export default {
        components: {Datatable},
    };
</script>
<style scoped>

</style>

