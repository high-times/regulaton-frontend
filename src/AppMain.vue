<template>
    <v-row>
        <v-col cols="12">
            <!--            searchbar goes here-->

            <v-card class="d-flex pa-2 justify-center" flat tile>
                <Searchbar/>
            </v-card>

            <!--            buttons go here-->

            <v-card
                    class="d-flex pa-2 justify-center"
                    flat
                    height="150px"
                    style="padding: 15px 0 15px 0"
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

            <v-container class="px-3">
                <v-row>
                    <v-col cols="1">

                    </v-col>
                    <v-col cols="10" style="background-color: lightpink">
                        <router-view/>
                    </v-col>
                    <v-col cols="1">

                    </v-col>


                </v-row>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
    import Searchbar from "./components/Searchbar";
    import PageViewButton from "./components/PageViewButton";
    import PageViewContent from "./components/PageViewContent";

    export default {
        name: "AppMain",
        components: {Searchbar, PageViewButton, PageViewContent},
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
