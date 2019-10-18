<template>
    <v-card flat
            class="mx-auto">
        <v-card-title>
            <v-text-field
                    append-icon="mdi-magnify"
                    hide-details
                    label="Search"
                    single-line
                    v-model="search"
            ></v-text-field>
        </v-card-title>
        <v-data-table
                :headers="headers"
                :items="data"
                :items-per-page="5"
                class="elevation-1 pa-2 mx-10" @click:row="showAlert">

            <template slot="items" slot-scope="props">
                <tr @click="showAlert(props.item)">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.type }}</td>
                    <td class="text-xs-right">{{ props.item.owner }}</td>
                    <td class="text-xs-right">{{ props.item.status }}</td>
                </tr>
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
    </v-card>
</template>

<script>
    import router from "../router";

    export default {
        name: "BookingDatatable",

        methods: {
            getColor(status) {
                //console.log(status);
                switch (status) {
                    case "Open":
                        return "orange";
                    case "Closed":
                        return "green";
                    case "Payment Awaiting":
                        return "red";
                }
            },
            showAlert(row) {
                // console.log(row);
                // add new form here----
                 router.push({ name: 'BookingNewBooking'});

                // alert('alert');
            },
        },

        data() {
            return {
                search: "",
                "headers": [
                    {
                        "text": "Date",
                        "align": "Center",
                        "sortable": false,
                        "value": "Date",
                    },
                    {"text": "Customer", "value": "name"},
                    {"text": "Out Date", "value": "outdate"},
                    {"text": "In Date", "value": "indate"},
                    {"text": "Type", "value": "type"},
                    {"text": "Serviced.by", "value": "user"},
                    {"text": "Status", "value": "status"},

                ],
                data: [
                    {
                        Date: "26/01/2019",
                        name: "Ranbeer.Singh",
                        outdate: "30/01/2019",
                        indate: "-",
                        type: "Supply",
                        user: "Bhushan",
                        status: "Open"
                    },
                    {
                        Date: "25/05/2019",
                        name: "RAS services",
                        outdate: "30/05/2019",
                        indate: "10/08/2019",
                        type: "Refill",
                        user: "Piyush",
                        status: "Closed"
                    },
                    {
                        Date: "08/07/2019",
                        name: "Arjun Singh",
                        outdate: "02/05/2019",
                        indate: "08/07/2019",
                        type: "Refill",
                        user: "Bhushan",
                        status: "Payment Awaiting"
                    },
                    {
                        Date: "08/07/2019",
                        name: "Sushant Singh",
                        outdate: "02/05/2019",
                        indate: "08/07/2019",
                        type: "Supply",
                        user: "Bhushan",
                        status: "Payment Awaiting"
                    },
                ]
            };
        },

    }
</script>

<style>

</style>
