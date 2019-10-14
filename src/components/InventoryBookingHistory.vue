<template>
    <v-card flat>
        <v-row>
            <v-icon>mdi-edit</v-icon>
            <v-icon>mdi-delete</v-icon>
            <v-icon>mdi-close</v-icon>
        </v-row>
        <v-row>
            <v-col>
                <v-col class="pa-0">
                    <InventorySheet :inventorySheetDetail="inventoryItem"></InventorySheet>
                </v-col>
            </v-col>
            <v-col>
                <v-data-table
                        :calculate-widths="100"
                        :headers="headers"
                        :items="data"
                        :items-per-page="5"
                        class="elevation-1"
                >
                    <template v-slot:item.status="{ item }">
                        <v-chip
                                :color="`${getColor(item.status)}`"
                                class="caption font-weight-medium"
                                small
                                text-color="white"
                        >
                            {{ item.status }}
                        </v-chip>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>

    </v-card>
</template>

<script>
    import InventorySheet from '../components/InventorySheet'

    export default {
        name: "BookingHistory",
        components: ({InventorySheet}),
        props: ["inventoryItem"],
        created() {
            console.log("Inside the detail view");
            console.log(this.inventoryItem);
        },
        data() {
            return {
                search: "",
                headers: [
                    {
                        text: "Date",
                        align: "Center",
                        sortable: false,
                        value: "name"
                    },
                    {text: "Customer", value: "type"},
                    {text: "Out Date", value: "outdate"},
                    {text: "In Date", value: "indate"},
                    {text: "Status", value: "status"},
                    {text: "Serviced by", value: "user"},
                ],
                data: [
                    {
                        name: "3-sept-2019",
                        type: "ABC Services",
                        outdate: "3-sept-2019",
                        indate: "-",
                        status: "Open",
                        user: "Bhushan"
                    },
                    {
                        name: "3-sept-2019",
                        type: "ABC Services",
                        outdate: "3-sept-2019",
                        indate: "-",
                        status: "Closed",
                        user: "Bhushan"
                    },
                    {
                        name: "3-sept-2019",
                        type: "ABC Services",
                        outdate: "3-sept-2019",
                        indate: "-",
                        status: "Open",
                        user: "Bhushan"
                    },
                    {
                        name: "3-sept-2019",
                        type: "ABC Services",
                        outdate: "3-sept-2019",
                        indate: "-",
                        status: "Open",
                        user: "Bhushan"
                    },
                    {
                        name: "3-sept-2019",
                        type: "ABC Services",
                        outdate: "3-sept-2019",
                        indate: "-",
                        status: "Closed",
                        user: "Bhushan"
                    },
                    {
                        name: "3-sept-2019",
                        type: "ABC Services",
                        outdate: "3-sept-2019",
                        indate: "-",
                        status: "Closed",
                        user: "Bhushan"
                    },
                    {
                        name: "3-sept-2019",
                        type: "ABC Services",
                        outdate: "3-sept-2019",
                        indate: "-",
                        status: "Closed",
                        user: "Bhushan"
                    },
                    {
                        name: "3-sept-2019",
                        type: "ABC Services",
                        outdate: "3-sept-2019",
                        indate: "-",
                        status: "Closed",
                        user: "Bhushan"
                    },
                    {
                        name: "3-sept-2019",
                        type: "ABC Services",
                        outdate: "3-sept-2019",
                        indate: "-",
                        status: "Open",
                        user: "Bhushan"
                    },
                    {
                        name: "3-sept-2019",
                        type: "ABC Services",
                        outdate: "3-sept-2019",
                        indate: "-",
                        status: "Closed",
                        user: "Bhushan"
                    }
                ]
            };
        },
        methods: {
            getColor(status) {
                console.log(status);
                switch (status) {
                    case "Open":
                        return "orange";
                    case "Closed":
                        return "green";
                }
            }
        }
    };</script
><

<style>
    .data.Booked {
        background: orange !important;
    }

    .data.Available {
        background: green !important;
    }

    .data.Empty {
        background: black !important;
    }
</style>
