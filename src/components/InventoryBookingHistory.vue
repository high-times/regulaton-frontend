<template>
    <v-card class="mx-auto"
            max-width="1600"
    >
        <v-row align="center" class="pa-2">
            <v-col>
                <v-icon class="mx-4" medium>mdi-pencil</v-icon>
                <v-icon class="pa-1" medium>mdi-delete</v-icon>
            </v-col>
            <v-col align="center">
                {{inventoryItem.name}} - {{inventoryItem.status}}
            </v-col>
            <v-col align="right">
                <v-icon @click="close" class="mx-5" medium>mdi-close</v-icon>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
            <v-col>
                <v-col class="pa-0">
                    <InventorySheet :inventorySheetDetail="inventoryItem"></InventorySheet>
                </v-col>
            </v-col>
            <v-col>
                <v-data-table
                        :calculate-widths="150"
                        :headers="headers"
                        :items="data"
                        :items-per-page="5"
                        class="elevation-1">
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
    import router from "../router"
    import InventoryDatatable from "./InventoryDatatable";

    export default {
        "name": ("BookingHistory,InventorySheet"),
        "components": ({InventorySheet}),
        "props": ['inventoryItem', 'inventorySheetDetail'],
        created() {
            if (this.inventorySheetDetail) {
                this.detailData.cylinderType.name = this.inventorySheetDetail.name;
            }
        },
        created() {
            //console.log("Inside the detail view");
            console.log(this.inventoryItem);
        },
        "data"() {
            return {
                "search": "",
                "headers": [
                    {
                        "text": "Date",
                        "align": "Center",
                        "sortable": false,
                        "value": "name"
                    },
                    {"text": "Customer", "value": "type"},
                    {"text": "Out Date", "value": "outdate"},
                    {"text": "In Date", "value": "indate"},
                    {"text": "Status", "value": "status"},
                    {"text": "Serviced by", "value": "user"},
                ],
                "data": [
                    {
                        "name": "3-sept-2019",
                        "type": "ABC Services",
                        "outdate": "3-sept-2019",
                        "indate": "-",
                        "status": "Open",
                        "user": "Bhushan"
                    },
                    {
                        "name": "3-sept-2019",
                        "type": "ABC Services",
                        "outdate": "3-sept-2019",
                        "indate": "-",
                        "status": "Closed",
                        "user": "Bhushan"
                    },
                    {
                        "name": "3-sept-2019",
                        "type": "ABC Services",
                        "outdate": "3-sept-2019",
                        "indate": "-",
                        "status": "Open",
                        "user": "Bhushan"
                    },
                    {
                        "name": "3-sept-2019",
                        "type": "ABC Services",
                        "outdate": "3-sept-2019",
                        "indate": "-",
                        "status": "Open",
                        "user": "Bhushan"
                    },
                    {
                        "name": "3-sept-2019",
                        "type": "ABC Services",
                        "outdate": "3-sept-2019",
                        "indate": "-",
                        "status": "Closed",
                        "user": "Bhushan"
                    },
                    {
                        "name": "3-sept-2019",
                        "type": "ABC Services",
                        "outdate": "3-sept-2019",
                        "indate": "-",
                        "status": "Closed",
                        "user": "Bhushan"
                    },
                    {
                        "name": "3-sept-2019",
                        "type": "ABC Services",
                        "outdate": "3-sept-2019",
                        "indate": "-",
                        "status": "Closed",
                        "user": "Bhushan"
                    },
                    {
                        "name": "3-sept-2019",
                        "type": "ABC Services",
                        "outdate": "3-sept-2019",
                        "indate": "-",
                        "status": "Closed",
                        "user": "Bhushan"
                    },
                    {
                        "name": "3-sept-2019",
                        "type": "ABC Services",
                        "outdate": "3-sept-2019",
                        "indate": "-",
                        "status": "Open",
                        "user": "Bhushan"
                    },
                    {
                        "name": "3-sept-2019",
                        "type": "ABC Services",
                        "outdate": "3-sept-2019",
                        "indate": "-",
                        "status": "Closed",
                        "user": "Bhushan"
                    }
                ]
            };
        },
        methods: {
            getColor: function (status) {
                // console.log(status);
                switch (status) {
                    case "Open":
                        return "orange";
                    case "Closed":
                        return "green";
                    //console.log(status);
                    case "Booked":
                        return "orange";
                    case "Available":
                        return "green";
                    case "Empty":
                        return "#999999";
                    case "Lost":
                        return "brown";
                    case "Returned":
                        return "indianred";

                }
            },
            close() {
                router.push({name: 'inventory'});
            },

        }
    }

</script>

<style>

</style>
