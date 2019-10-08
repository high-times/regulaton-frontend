<template>
    <v-container style="padding:0;">
        <!--        cylinder dashboard-->

        <v-row>
            <v-col
                    :key="key"
                    align="center"
                    v-for="(cylinderCount, key) in cylinderCounts"
            >
                <v-card>
                    <v-container style="padding:0;">
                        <!--        cylinder dashboard-->
                        <v-row>
                            <v-col align="center" class="display-1">
                                {{ cylinderCount.count}}
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col align="center" class="title">
                                {{cylinderCount.text}}
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
        <!--        first row of 2 cards-->
        <v-row>
            <v-col cols="3" v-for="cylinderType in cylinderTypes">
                <CylinderDataCard
                        :empty="cylinderType.empty"
                        :full="cylinderType.full"
                        :out="cylinderType.out"
                        :total="cylinderType.total"
                        textIconColor="grey--text text--darken-2"
                >
                    <template v-slot:gasName>
            <span
                    class="display-1 vertical-center grey--text text--darken-2"
                    v-html="cylinderType.gasName"
            ></span>
                    </template>
                </CylinderDataCard>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import CylinderDataCard from "./CylinderDataCard";

    export default {
        components: {CylinderDataCard},

        // components: {
        //     HomeViewContent
        // }
        data() {
            return {
                cylinderTypes: [
                    {
                        gasName: `O<sub>2</sub>`,
                        empty: 15,
                        full: 22,
                        out: 19,
                        total: 56
                    },
                    {
                        gasName: `CO<sub>2</sub>`,
                        empty: 12,
                        full: 45,
                        out: 7,
                        total: 64
                    },
                    {
                        gasName: `N<sub>2</sub>`,
                        empty: 12,
                        full: 36,
                        out: 43,
                        total: 91
                    },
                    {
                        gasName: `Ar`,
                        empty: 12,
                        full: 17,
                        out: 25,
                        total: 44
                    }
                ],
                cylinderCounts: [
                    {
                        count: 255,
                        text: "Total"
                    },
                    {count: 120, text: "Full"},
                    {count: 51, text: "Empty"},
                    {count: 74, text: "With Customers"},
                    {count: 20, text: "With Dealers"}
                ]
            };
        }
    };
</script>
<style scoped>
    .vertical-center {
        vertical-align: middle;
    }
</style>
