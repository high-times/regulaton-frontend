<template>
    <v-img
            :max-height="size"
            :max-width="size"
            :min-height="size"
            :min-width="size"
            class="img-middle-text logo-image"
            src="../../public/images/logo.png"
    ></v-img>
</template>
<script>
    export default {

        name: 'LogoImage', props: ['size']
    }
</script>
<style scoped>

    .logo-image {
        animation: spin 3s ease-in-out;
    }

    .img-middle-text {
        vertical-align: middle;
        display: inline-block;
    }

    @keyframes spin {
        0% {
            transform: rotateZ(0);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
</style>