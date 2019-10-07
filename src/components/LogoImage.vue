<template>
    <v-img
            :max-height="sizeOfIcon"
            :max-width="sizeOfIcon"
            :min-height="sizeOfIcon"
            :min-width="sizeOfIcon"
            class="img-middle-text logo-image"
            src="../../public/images/logo.png"
    ></v-img>
</template>
<script>
    export default {
        name: "LogoImage",
        props: ["sizeOfIcon"]
    };
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
