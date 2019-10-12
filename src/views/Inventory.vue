<template>
    <v-card
            class="mx-auto"
            flat
            max-width="900">
        <!--        row one is for "add new cylinder"-->
        <v-container style="padding:0;">
            <v-row>
                <v-col>
                    <v-btn
                            :color="this.$vuetify.theme.themes.light.inventory"

                            class="white--text float-right"

                            rounded>
                        <span> Add Cylinder</span>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
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

