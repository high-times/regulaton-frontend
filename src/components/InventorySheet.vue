<template>
            <v-card
                    class="mx-auto"
                    max-width="450"
                    max-height="1000"
                    outlined>
                <v-list >
                    <v-list-item-group v-model="item">
                        <v-list-item
                                class="pa-0"
                                v-for="(item, i) in items"
                                :key="i">
                            <v-list-item-content
                                    class="pa-0">
                                <v-col>
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-col>
                                <v-col>
                                    <v-list-item-title v-text="item.data"></v-list-item-title>
                                </v-col>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
</template>

<script>
    export default {
        name: "InventorySheet",
        data: () => ({
            item: 1,
            items: [
                { text: 'Date Added', data: '15 Sept 2015' },
                { text: 'Allowed Booking Days', data: '15 Days'},
                { text: 'Demurrage Rate (Per Day)', data: '75Rs' },
                { text: 'Gas Type', data: 'Argon' },
                { text: 'Owner', data: 'Bhushan' },
                { text: 'Cylinder Type', data: 'Large' },
                { text: 'Purpose', data: 'Distribution' },
            ],
        }),
    }
</script>