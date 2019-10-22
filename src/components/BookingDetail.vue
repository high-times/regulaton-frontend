<template>
    <v-card class="mt-10 mx-auto"
            flat
            max-width="800">
        <v-row align="center">
            <v-col align="center">
                <h2  :style="`width:100%; color: ${this.$vuetify.theme.themes.light.bookings};`"
                >Booking No.:</h2>
            </v-col>

            <v-btn icon>
                <v-icon @click="close" class="mx-5" medium>mdi-close</v-icon>
            </v-btn>
        </v-row>
        <v-divider></v-divider>
        <v-row>
            <v-col>
                    <span class="font-weight-bold">
                        Booking for:
                    </span>
                    <span> Lola Curz</span>
               </v-col>
            <v-col>
                <span class="font-weight-bold">
                    Out Date:
                </span>
                <span>10/12/2016</span>
            </v-col>
            <v-col>
                <span class="font-weight-bold">
                    Type of Booking:
                </span>
                <span>Customer</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-data-table
                        :headers="headers"
                        :items="data"
                        :hide-default-footer="true">
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs-right">{{ props.item.type }}</td>
                        <td class="text-xs-right">{{ props.item.owner }}</td>
                        <td class="text-xs-right">{{ props.item.status }}</td>
                </template>
                    <template v-slot:item.status="{ item }">
                        <v-chip
                                :color="`${getColor(item.status)}`"
                                class="caption font-weight-medium"
                                small
                                text-color="white">
                            {{ item.status }}
                        </v-chip>
                    </template>
                </v-data-table>
            </v-col>
            <v-col>
                <span class="font-weight-bold">Serviced by: </span>
                <span>Bhushan</span>
            </v-col>
            <v-col>
                <span class="font-weight-bold">Calculated Demurrage:</span>
                <span>125</span>
            </v-col>
        </v-row>
<!--        </v-container>-->
    </v-card>
</template>

<script>
    import BookingDetail from '../components/BookingDetail'
    import router from "../router"
    export default {
        name: "BookingDetail",

        methods:{
        close() {
            router.push({name: 'bookings'});
        }
    },
        data() {
            return {
                headers: [
                    {
                        text: "Cylinder ID",
                        align: "center",
                        sortable: false,
                        value: "name",
                    },
                    {text: "In Date", align: "center", value: "type"},
                ],
                data: [
                    {
                        name: "CL 1255",
                        type: "13/05/2019",
                    },
                    {
                        name: "CL 1256",
                        type: "Not In",
                    },
                    {
                        name: "2568252",
                        type: "26/07/2019",

                    },
                ]
            };
        },
    }

</script>

<style scoped>

</style>