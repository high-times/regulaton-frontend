<template>
    <div>
    <v-content v-if="userLoggedin">
        <router-view/>
    </v-content>
    </div>
</template>
<script>

    export default {
        name: 'AppMain',

        props: {
            userLoggedin: {}
        }
    }
</script>