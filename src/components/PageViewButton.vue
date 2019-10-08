<template>
    <v-btn
            :to="link"
            class="btn-style mx-4 my-2 text-none font-weight-medium subtitle-1"
            color="#F5F5F5">
        <v-container>
            <v-row align="center" justify="center">
                <v-icon :style="{ fontSize: 50 + 'px', color: color }">{{
                    icon
                    }}
                </v-icon>
            </v-row>

            <v-row :style="{ color: color }" class="mt-1" justify="center">
                {{ name }}
            </v-row>
        </v-container>
    </v-btn>
</template>

<script>
    export default {
        name: "PageViewButton",
        props: ["name", "icon", "link", "color"]
    };
</script>

<style scoped>
    .btn-style {
        height: 120px !important;
        width: 120px !important;
        border-radius: 20px;
    }

    .icon-style {
        font-size: 90px !important;
    }
</style>
