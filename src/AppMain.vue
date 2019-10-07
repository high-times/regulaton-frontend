<template>
    <v-row>
        <v-col cols="12">
            <!--            searchbar goes here-->

            <v-card class="d-flex pa-2 justify-center" tile>
                <Searchbar/>
            </v-card>

            <!--            buttons go here-->

            <v-card class="d-flex pa-2 justify-center" height="150px" outlined tile>
                <PageViewButton/>
            </v-card>

            <!--            content of each page view goes here-->

            <v-container
                    style="background-color: lightpink;align-items: start;"
            >
                <v-row>
                    <v-col cols="12">
                        Im the content of each view
                        <router-view/>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
    </v-row>


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
