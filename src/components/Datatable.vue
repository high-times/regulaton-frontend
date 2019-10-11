<template>
    <v-card>
        <v-card-title>
            <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
            ></v-text-field>
        </v-card-title>
    <v-data-table
            :headers="headers"
            :items="data"
            :items-per-page="5"
            class="elevation-1"
    ></v-data-table>
        </v-card>
</template>

<script>
        export default {
            name: "Datatable",
        data () {
            return {
                search: '',
                headers: [
                    {
                        text: 'Cylinder ID',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Gas Type', value: 'type' },
                    { text: 'Owner', value: 'owner' },
                    { text: 'Status', value: 'status' }

                ],
                data: [
                    {
                        name: 'CL 1255',
                        type: 'Oxygen',
                        owner: 'Bhushan',
                        status: 'Booked',
                    },
                    {
                        name: 'CL 1256',
                        type: 'Argon',
                        owner: 'Bhushan',
                        status: 'Available',
                    },
                    {
                        name: '2568252',
                        type: 'Hydrogen',
                        owner: 'Bhushan',
                        status: 'Empty',
                    },
                    {
                        name: '74855696',
                        type: 'Oxygen',
                        owner: 'Piyush',
                        status: 'Empty',
                    },
                    {
                        name: 'Cl 1568',
                        type: 'Argon',
                        owner: 'Piyush',
                        status: 'Booked',
                    },
                    {
                        name: 'Cl 2589',
                        type: 'Oxygen',
                        owner: 'Piyush',
                        status: 'Booked',
                    },
                    {
                        name: 'Cl 7896',
                        type: 'Argon',
                        owner: 'Bhushan',
                        status: 'Empty',
                    },
                    {
                        name: 'Cl 2546',
                        type: 'Nitrogen',
                        owner: 'Piyush',
                        status: 'Available',
                    },
                    {
                        name: 'Cl 8956',
                        type: 'Oxygen',
                        owner: 'Piyush',
                        status: 'Available',
                    },
                    {
                        name: 'Cl 5236',
                        type: 'Nitrogen',
                        owner: 'Bhushan',
                        status: 'Booked',
                    },
                ],
            }
        },
    }
</script><

<style>
    .data.Booked
     {
         background: orange !important;
     }
    .data.Available
    {
        background: green !important;
    }
    .data.Empty
    {
        background: black !important;
    }
</style>