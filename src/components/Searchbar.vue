<template>
    <v-row align="center" elevation="0" flat style="max-width: 650px">
        <v-text-field
                append-icon="mdi-magnify"
                color="white"
                hide-details
                outlined
                placeholder="Search..."
                rounded
                single-line
        ></v-text-field>
    </v-row>
</template>

<script>
    export default {
        name: "Searchbar"
    };
</script>

<style scoped></style>
