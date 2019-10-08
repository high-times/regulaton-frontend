<template>
    <v-container class="fill-height">
        <v-container>
            <v-row align="center" justify="center">
                <v-col cols="12" lg="4" md="8" sm="12">
                    <v-toolbar class="mb-10" color="transparent" flat>
                        <v-toolbar-title
                                :style="{ fontSize: fontSizeForTitle }"
                                class="text-center full-width-title font-weight-black"
                        >
                            <LogoImage size-of-icon="85px"/>
                            {{ this.$store.state.title }}
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                    label="Username"
                                    name="login"
                                    type="text"
                                    v-model="name"
                            ></v-text-field>

                            <v-text-field
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    v-model="password"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn @click="submit" color="primary" min-width="90%">Login</v-btn>
                        <v-snackbar :value="errorMessage" bottom color="error">
                            {{ errorMessage }}
                        </v-snackbar>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
    import axios from "axios";
    import LogoImage from "../components/LogoImage";

    export default {
        name: "login",
        components: {LogoImage},
        props: {
            source: String
        },
        data: () => ({
            drawer: null,
            name: "",
            password: "",
            errorMessage: ""
        }),
        computed: {
            fontSizeForTitle() {
                switch (this.$vuetify.breakpoint.name) {
                    case "xs":
                        return "2em";
                    case "md":
                        return "2.5em";
                    default:
                        return "3em";
                }
            }
        },
        methods: {
            submit: function () {
                console.log([this.name, this.password]);
                // Make a request for a user with a given ID
                axios
                    .get("http://localhost:3002/api/login", {
                        params: {
                            username: this.name,
                            password: this.password
                        }
                    })
                    .then(response => {
                        // handle success

                        this.$store.commit("logoutUser");
                        console.log("User logged in: " + response.data.user.FIRST_NAME);
                        this.$store.commit("loginUser");
                        this.errorMessage = "";
                    })
                    .catch(error => {
                        // handle error

                        if (error.response.status === 401) {
                            console.log("Invalid Credentials.");
                            this.errorMessage = "Invalid Credentials";
                        } else {
                            console.log("System error");
                            this.errorMessage = "System error";
                        }
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            }
        }
    };
</script>

<style scoped>
    .full-width-title {
        min-width: 100%;
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
