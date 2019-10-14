<template>
    <v-card
            class="mx-auto"
            max-height="1000"
            max-width="450"
            outlined>
        <v-list>
            <v-list-item-group v-model="item">
                <v-list-item
                        :key="i"
                        class="pa-0"
                        v-for="(item, i) in detailData">
                    <v-list-item-content
                            class="pa-0">
                        <v-col>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-col>
                        <v-col>
                            <v-list-item-title v-text="item.value"></v-list-item-title>
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
        props: ['inventorySheetDetail'],
        created() {
            if (this.inventorySheetDetail) {
                this.detailData.gasType.value = this.inventorySheetDetail.type;
                this.detailData.owner.value = this.inventorySheetDetail.owner;
            }
        },
        data: () => ({
            detailData: {
                dateAdded: {text: 'Date Added', value: '15 Sept 2015'},
                allowedBookingDays: {text: 'Allowed Booking Days', value: '15 Days'},
                gasType: {text: 'Gas Type', value: ''},
                owner: {text: 'Owner', value: ''},
                cylinderType: {text: 'Cylinder Type', value: 'Large'},
                purpose: {text: 'Purpose', value: 'Distribution'}
            }
        }),
    }
</script>