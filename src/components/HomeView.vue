<template>

    <v-card class="text-center justify-center">
         <span><LogoImage/></span>
        <span> {{ this.$store.state.title }} </span>
    </v-card>

</template>

<script>
    import LogoImage from "../components/LogoImage";


    export default {
        components: {LogoImage},
    }

</script>

<style scoped>
    .full-width-title {
        min-width: 100%;

    }

    </style>