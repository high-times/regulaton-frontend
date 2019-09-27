<template>
    <v-img
            class="img-middle-text logo-image"
            max-height="85px"
            max-width="85px"
            src="../../public/images/logo.png"
    ></v-img>
</template>
<script>
    export default {
        name: 'LogoImage'
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