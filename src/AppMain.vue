<template>

    <v-layout column>
        <v-flex style="height: 220px;">
            <v-card class="d-flex pa-2 justify-center" flat tile>
                <Searchbar/>
            </v-card>

            <!--            buttons go here-->

            <v-card
                    class="d-flex pa-2 justify-center"
                    flat
                    style="padding: 15px 0 15px 0; overflow-x: auto"
                    tile
            >
                <PageViewButton
                        :color="this.$vuetify.theme.themes.light.home"
                        icon="mdi-tablet-dashboard"
                        link="/"
                        name="Home"
                />
                <PageViewButton
                        :color="this.$vuetify.theme.themes.light.inventory"
                        icon="mdi-briefcase"
                        link="/inventory"
                        name="Inventory"
                />
                <PageViewButton
                        :color="this.$vuetify.theme.themes.light.bookings"
                        icon="mdi-book-open"
                        link="/bookings"
                        name="Bookings"
                />
                <PageViewButton
                        :color="this.$vuetify.theme.themes.light.contacts"
                        icon="mdi-contact-phone"
                        link="/contacts"
                        name="Contacts"
                />
                <PageViewButton
                        :color="this.$vuetify.theme.themes.light.reports"
                        icon="mdi-google-analytics"
                        link="/reports"
                        name="Reports"/>

            </v-card>

            <!--            content of each page view goes here-->
        </v-flex>
        <v-flex>
            <v-container>
                <v-row align="center"
                       justify="center">
                    <v-col class="px-8" cols="10" style="overflow-y: auto; height: calc(100vh - 330px);">
                        <router-view/>
                    </v-col>
                </v-row>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
    import Searchbar from "./components/Searchbar";
    import PageViewButton from "./components/PageViewButton";


    export default {
        name: "AppMain",
        components: {Searchbar, PageViewButton},
        props: {},
        data: () => ({
            menuItems: [
                {title: "Profile"},
                {title: "Settings"},
                {title: "Logout"}
            ]
        })
    };
</script>
