<template>
    <v-hover>
        <template v-slot="{hover}">
            <v-card :elevation="hover ? 24 : 2" outlined style="cursor:pointer;">
                <v-container>
                    <v-row class="my-card-title">
                        <v-col class="no-vertical-pad" justify="center">
                            <v-icon

                                    :class="`display-1 no-vertical-pad ${textIconColor}`" style="vertical-align: middle"
                            >mdi-gas-cylinder
                            </v-icon>
                            <slot name="gasName"></slot>
                        </v-col>
                    </v-row>


                    <v-row align="center">
                        <v-col class="no-vertical-pad" justify="center">
                            <apexchart
                                    :options="chartOptions"
                                    :series="series"
                                    height="150"
                                    type="bar"
                            />
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col class="no-vertical-pad text-center" justify="center">
                            Total: &nbsp;<span class="font-weight-bold">{{ total }}</span>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </template>
    </v-hover>
</template>
<script>

    export default {
        name: "CylinderDataCard",
        props: [
            "gasName",
            "gasIcon",
            "total",
            "out",
            "full",
            "empty",
            "textIconColor"
        ],
        components: {},
        methods: {
            raiseMe() {

            }
        },
        data() {
            let __self = this;
            return {
                colorConfig: {
                    idx: 0,
                    list: ['#FFA726', '#EF5350', '#66BB6A']
                },
                series: [
                    {
                        name: "Quantity",
                        data: [this.out, this.empty, this.full],

                    }
                ],
                chartOptions: {
                    colors: [function ({value, seriesIndex, w}) {
                        if (__self.colorConfig.idx >= 3) {
                            __self.colorConfig.idx = 0;
                        }
                        return __self.colorConfig.list[__self.colorConfig.idx++];
                    }],
                    chart: {
                        type: "bar",
                        toolbar: {
                            show: false
                        }
                    },
                    plotOptions: {
                        bar: {

                            dataLabels: {
                                position: "top" // top, center, bottom
                            }
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: function (val) {
                            return val;
                        },
                        offsetY: -30,
                        style: {
                            fontSize: "16px",
                            colors: ["#304758"]
                        }
                    },

                    xaxis: {
                        categories: [
                            "Out",
                            "Empty",
                            "Full"
                        ],
                        position: "bottom",
                        labels: {
                            offsetY: 0
                        },
                        axisBorder: {
                            show: false
                        },
                        axisTicks: {
                            show: false
                        },
                        tooltip: {
                            enabled: true,
                            offsetY: 0
                        }
                    },
                    yaxis: {
                        axisBorder: {
                            show: false
                        },
                        axisTicks: {
                            show: false
                        },
                        labels: {
                            show: false,
                            formatter: function (val) {
                                return val;
                            }
                        }
                    },
                    grid: {
                        show: false
                    },

                }
            };
        }
    };
</script>

<style scoped>
    .no-pad {
        padding: 0;
    }

    .no-vertical-pad {
        padding-top: 0;
        padding-bottom: 0;
    }

    .my-card-title {
        text-align: center;
        margin: 0;
        padding: 0;
    }
</style>
