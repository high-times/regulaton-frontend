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
      class="elevation-1" @click:row="showAlert">
        <template slot="items" slot-scope="props">
            <tr @click="showAlert(props.item)">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.type }}</td>
                <td class="text-xs-right">{{ props.item.owner }}</td>
                <td class="text-xs-right">{{ props.item.status }}</td>
            </tr>
        </template>
        <template v-slot:item.view_bookings="{ item }">
            <v-btn @click="showBookingsForInventory(item)" rounded x-small class="brown lighten-1, white--text">View Booking</v-btn>
        </template>

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
  </v-card>
</template>

<script>
    import InventoryBookingHistory from '../components/InventoryBookingHistory';
    import router from "../router";

  export default {
      name: "Datatable",
      components: ({InventoryBookingHistory}),

      methods: {
          getColor(status) {
              //console.log(status);
              switch (status) {
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
          showAlert(row) {
             // console.log(row);
              router.push({ name: 'inventoryDetail', params: { inventoryItem: row } });

             // alert('alert');
          },
          showBookingsForInventory(item) {
                  console.log("ITEM CLICKED!!!");
                  console.log(item);
          }
      },

      data() {
          return {
              search: "",
              headers: [
                  {
                      text: "Cylinder ID",
                      align: "center",
                      sortable: false,
                      value: "name",
                  },
                  {text: "Gas Type", align: "center", value: "type"},
                  {text: "Owner", align: "center", value: "owner"},
                  {text: "Status", align: "center", value: "status"},
                  {text: " ", align: "center", value: "view_bookings", sortable: false},

              ],
              data: [
                  {
                      name: "CL 1255",
                      type: "Oxygen",
                      owner: "Bhushan",
                      status: "Returned"
                  },
                  {
                      name: "CL 1256",
                      type: "Argon",
                      owner: "Bhushan",
                      status: "Available"
                  },
                  {
                      name: "2568252",
                      type: "Hydrogen",
                      owner: "Bhushan",
                      status: "Empty"
                  },
                  {
                      name: "74855696",
                      type: "Oxygen",
                      owner: "Piyush",
                      status: "Empty"
                  },
                  {
                      name: "Cl 1568",
                      type: "Argon",
                      owner: "Piyush",
                      status: "Booked"
                  },
                  {
                      name: "Cl 2589",
                      type: "Oxygen",
                      owner: "Piyush",
                      status: "Booked"
                  },
                  {
                      name: "Cl 7896",
                      type: "Argon",
                      owner: "Bhushan",
                      status: "Empty"
                  },
                  {
                      name: "Cl 2546",
                      type: "Nitrogen",
                      owner: "Piyush",
                      status: "Available"
                  },
                  {
                      name: "Cl 8956",
                      type: "Oxygen",
                      owner: "Piyush",
                      status: "Available"
                  },
                  {
                      name: "Cl 5236",
                      type: "Nitrogen",
                      owner: "Bhushan",
                      status: "Booked"
                  }
              ]
          };
      },

}
</script>

<style>

</style>
