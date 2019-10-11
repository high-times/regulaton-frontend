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
            :items="gasdata"
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
                    { text: 'Gas Type', value: 'gastype' },
                    { text: 'Owner', value: 'owner' },
                    { text: 'Status', value: 'status' }

                ],
                gasdata: [
                    {
                        name: 'CL 1255',
                        gastype: 'Oxygen',
                        owner: 'Bhushan',
                        status: 'Booked',
                    },
                    {
                        name: 'CL 1256',
                        gastype: 'Argon',
                        owner: 'Bhushan',
                        status: 'Available',
                    },
                    {
                        name: '2568252',
                        gastype: 'Hydrogen',
                        owner: 'Bhushan',
                        status: 'Empty',
                    },
                    {
                        name: '74855696',
                        gastype: 'Oxygen',
                        owner: 'Piyush',
                        status: 'Empty',
                    },
                    {
                        name: 'Cl 1568',
                        gastype: 'Argon',
                        owner: 'Piyush',
                        status: 'Booked',
                    },
                    {
                        name: 'Cl 2589',
                        gastype: 'Oxygen',
                        owner: 'Piyush',
                        status: 'Booked',
                    },
                    {
                        name: 'Cl 7896',
                        gastype: 'Argon',
                        owner: 'Bhushan',
                        status: 'Empty',
                    },
                    {
                        name: 'Cl 2546',
                        gastype: 'Nitrogen',
                        owner: 'Piyush',
                        status: 'Available',
                    },
                    {
                        name: 'Cl 8956',
                        gastype: 'Oxygen',
                        owner: 'Piyush',
                        status: 'Available',
                    },
                    {
                        name: 'Cl 5236',
                        gastype: 'Nitrogen',
                        owner: 'Bhushan',
                        status: 'Booked',
                    },
                ],
            }
        },
    }
</script><

<style>

</style>