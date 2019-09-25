<template>
    <div>
    <Navbar v-if="userLoggedin"></Navbar>
    <v-content v-if="userLoggedin">
        <router-view/>
    </v-content>
    </div>
</template>
<script>
    import Navbar from "./components/Navbar"

    export default {
        name: 'AppMain',
        components: {Navbar},
        props: {
            userLoggedin: {}
        }
    }
</script>