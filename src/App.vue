<template>
    <v-app class="no-fill">
        <Login v-if="!$store.getters.userLoggedIn"></Login>

        <v-app-bar
                app
                class="no-fill"
                clipped-left
                flat
                v-if="$store.getters.userLoggedIn"
        >
            <v-toolbar-title
            ><span><LogoImage sizeOfIcon="50px"/></span>
                <span class="headline font-weight-black"> {{ this.$store.state.title }} </span></v-toolbar-title
            >

            <div class="flex-grow-1"></div>

            <!--                add firstName to the Menu button from the current logged in user-->

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn class="text-none font-weight-regular subtitle-1 grey--text" text v-on="on">
                        Welcome Atharva
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                            :key="index"
                            @click=""
                            v-for="(menuItem, index) in menuItems"
                    >
                        <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-avatar>
                <img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"/>
            </v-avatar>
        </v-app-bar>
        <v-content v-if="$store.getters.userLoggedIn">
            <AppMain/>
        </v-content>
        <v-footer class="white">
            <div class="flex-grow-1"></div>
            <div class="font-weight-thin caption">Powered by - Hightimes HQ</div>
        </v-footer>
    </v-app>
</template>

<script>
    import Login from "./views/Login";
    import AppMain from "./AppMain";
    import LogoImage from "./components/LogoImage";

    export default {
        name: "App",
        components: {AppMain, Login, LogoImage},
        data: () => ({
            menuItems: [
                {title: "Profile"},
                {title: "Settings"},
                {title: "Logout"}
            ]
        })
    };
</script>

<style scoped>
    .no-fill {
        background: none !important;
    }
</style>
